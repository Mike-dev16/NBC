import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import {faRedditAlien} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  logoSrc = '../assets/images/footerLogo.png'
  logoAlt = "footer-logo"
  RssFeed = faRss as IconProp;
  twitter = faTwitter as IconProp;
  reddit = faRedditAlien as IconProp;
  facebook = faFacebook as IconProp;
  copyright = faCopyright as IconProp;
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
