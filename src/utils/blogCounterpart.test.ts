import test from "node:test";
import assert from "node:assert/strict";
import {
  createBlogCounterpartLookup,
  filterDiscoveryVisibleEntries,
  type BlogEntryLike,
} from "./blogCounterpart.ts";

function createEntry(slug: string, draft = false): BlogEntryLike {
  return {
    slug,
    data: {
      draft,
    },
  };
}

test("returns a publishable counterpart for paired published posts", () => {
  const esEntry = createEntry("es/projects/article-share-presentation");
  const enEntry = createEntry("en/projects/article-share-presentation");
  const lookup = createBlogCounterpartLookup([esEntry, enEntry]);

  const result = lookup.getCounterpartInfo(esEntry);

  assert.equal(result.locale, "es");
  assert.equal(result.relativePath, "projects/article-share-presentation");
  assert.equal(result.counterpartLocale, "en");
  assert.equal(
    result.counterpartSlug,
    "en/projects/article-share-presentation",
  );
  assert.equal(result.counterpart, enEntry);
  assert.equal(result.hasCounterpart, true);
  assert.equal(result.hasPublishableCounterpart, true);
  assert.equal(lookup.isDiscoveryVisible(esEntry), true);
});

test("treats missing mirrored paths as not publishable", () => {
  const esEntry = createEntry("es/ai/agents/blog-migration-ai-agents");
  const lookup = createBlogCounterpartLookup([esEntry]);

  const result = lookup.getCounterpartInfo(esEntry);

  assert.equal(result.relativePath, "ai/agents/blog-migration-ai-agents");
  assert.equal(result.counterpartSlug, "en/ai/agents/blog-migration-ai-agents");
  assert.equal(result.counterpart, undefined);
  assert.equal(result.hasCounterpart, false);
  assert.equal(result.hasPublishableCounterpart, false);
  assert.equal(lookup.isDiscoveryVisible(esEntry), false);
});

test("does not treat draft counterparts as publishable", () => {
  const esEntry = createEntry("es/java/test/mock-http-request");
  const enDraftEntry = createEntry("en/java/test/mock-http-request", true);
  const lookup = createBlogCounterpartLookup([esEntry, enDraftEntry]);

  const result = lookup.getCounterpartInfo(esEntry);

  assert.equal(result.hasCounterpart, true);
  assert.equal(result.hasPublishableCounterpart, false);
  assert.equal(lookup.isDiscoveryVisible(esEntry), false);
});

test("preserves locale identity for the current entry while resolving the mirrored counterpart", () => {
  const esEntry = createEntry(
    "es/spring/migration/migrate-spring-from-2-7-to-3-x",
  );
  const enEntry = createEntry(
    "en/spring/migration/migrate-spring-from-2-7-to-3-x",
  );
  const lookup = createBlogCounterpartLookup([esEntry, enEntry]);

  const enResult = lookup.getCounterpartInfo(enEntry);

  assert.equal(enResult.locale, "en");
  assert.equal(enResult.counterpartLocale, "es");
  assert.equal(
    enResult.relativePath,
    "spring/migration/migrate-spring-from-2-7-to-3-x",
  );
  assert.equal(enResult.counterpart, esEntry);
  assert.equal(lookup.isDiscoveryVisible(enEntry), true);
});

test("filters discovery entries to a locale while preserving original order", () => {
  const hiddenEsEntry = createEntry("es/ai/agents/blog-migration-ai-agents");
  const hiddenEnEntry = createEntry("en/java/test/mock-http-request", true);
  const visibleFirst = createEntry("es/projects/article-share-presentation");
  const visibleFirstCounterpart = createEntry(
    "en/projects/article-share-presentation",
  );
  const visibleSecond = createEntry(
    "es/spring/migration/migrate-spring-from-2-7-to-3-x",
  );
  const visibleSecondCounterpart = createEntry(
    "en/spring/migration/migrate-spring-from-2-7-to-3-x",
  );

  const entries = [
    hiddenEsEntry,
    visibleFirstCounterpart,
    hiddenEnEntry,
    visibleFirst,
    visibleSecond,
    visibleSecondCounterpart,
  ];

  assert.deepEqual(filterDiscoveryVisibleEntries(entries, "es"), [
    visibleFirst,
    visibleSecond,
  ]);
});

test("filters english discovery entries using the same publishability rule", () => {
  const visibleEsEntry = createEntry("es/projects/article-share-presentation");
  const visibleEnEntry = createEntry("en/projects/article-share-presentation");
  const hiddenEnEntry = createEntry("en/ai/agents/blog-migration-ai-agents");

  const entries = [visibleEsEntry, visibleEnEntry, hiddenEnEntry];

  assert.deepEqual(filterDiscoveryVisibleEntries(entries, "en"), [
    visibleEnEntry,
  ]);
});
