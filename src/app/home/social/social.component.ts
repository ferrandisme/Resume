import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {


  protected openPortfolio () : void {
    window.open("https://www.linkedin.com/in/adrian-ferrandis/", "_blank");
  }

  protected openJobs () : void {
    window.open("https://github.com/ferrandisme", "_blank");
  }
}
