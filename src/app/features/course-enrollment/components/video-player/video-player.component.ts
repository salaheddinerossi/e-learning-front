import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnChanges {
  @Input() videoUrl!: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videoUrl']) {
      this.loadVideo();
    }
  }

  loadVideo(): void {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.load();
    }
  }
}
