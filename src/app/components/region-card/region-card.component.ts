import { Component, OnInit, Input } from '@angular/core';
import { ToggleRegion, RotateIcon } from '../../animations/regions.animation';

@Component({
  selector: 'app-region-card',
  templateUrl: './region-card.component.html',
  styleUrls: ['./region-card.component.scss'],
  animations: [
    ToggleRegion,
    RotateIcon,
  ]
})
export class RegionCardComponent implements OnInit {

  @Input() regionInfo: any;
  showRegionInfo: boolean;
  versionList: any[] = [];

  constructor() {
    this.showRegionInfo = false;
  }

  ngOnInit(): void {
    this.processVersions();
  }

  public toggleRegionInfo(): void {
    this.showRegionInfo = !this.showRegionInfo;
  }

  public processVersions(): any {
    this.versionList = this.regionInfo.version_groups.map((x: any) => {
      return this.processVersionsNames(x.name);
    }).flat();
    console.log('NAME', this.versionList);
  }

  public processGeneration(name: string): string {
    return name.replace('-', ' ');
  }

  private processVersionsNames(name: string): any {
    if (this.severalDash(name) === true) {
      const splitNames = name.split('-');
      return [`${splitNames[0]}-${splitNames[1]}`, `${splitNames[2]}-${splitNames[3]}`];
    } else {
      return name.split('-');
    }
  }

  private severalDash(name: string): boolean {
    return ((name.match(/-/g) || []).length > 1);
  }

  public getVersionCover(version: string): string {
    return `../../../assets/images/versions/${version}.png`;
  }

  public getRegionMap(version: string): string {
    return `../../../assets/images/regions/${version}.png`;
  }

  public capitalizeVersion(version: string): string {
    return version.toUpperCase().replace('-', ' ');
  }
}
