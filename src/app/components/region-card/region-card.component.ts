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
  regionName: string;
  regionGeneration: string;
  regionLocationsNumber: string;
  regionMap: string;
  showRegionInfo: boolean;
  versionsNamesList: any[] = [];
  versionList: any[] = [];

  constructor() {
    this.showRegionInfo = false;
  }

  ngOnInit(): void {
    this.processVersions();
    this.initRegionCard();
  }

  public processVersions(): any {
    this.versionsNamesList = this.regionInfo.version_groups.map((x: any) => {
      return this.processVersionsNames(x.name);
    }).flat();
  }

  private initRegionCard(): void {
    this.regionName = this.regionInfo?.name;
    this.regionGeneration = this.processGeneration(this.regionInfo?.main_generation?.name);
    this.regionLocationsNumber = this.regionInfo?.locations?.length;
    this.versionList = this.versionsNamesList.map((x: any) => {
      return {
        name: this.processVersionsNames(x),
        capital_name: this.capitalizeVersion(x),
        cover: this.getVersionCover(x)
      };
    });
    this.regionMap = this.getRegionMap(this.regionInfo?.name);
  }

  public toggleRegionInfo(): void {
    this.showRegionInfo = !this.showRegionInfo;
  }

  private processGeneration(name: string): string {
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

