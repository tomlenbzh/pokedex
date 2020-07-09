import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sprites-gallery',
  templateUrl: './sprites-gallery.component.html',
  styleUrls: ['./sprites-gallery.component.scss']
})
export class SpritesGalleryComponent implements OnInit {

  @Input() spritesList: any;

  constructor() { }

  ngOnInit(): void { }
}
