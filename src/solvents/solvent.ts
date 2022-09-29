import { expect } from '@playwright/test';
import type { Page } from '@playwright/test';
import { Inspector } from "../inspector/inspector";
import {WebActions} from"./webActions";
import {testConfig} from "../../testConfig";

let inspector : Inspector;
let webActions :WebActions;

export class Solvents {
    readonly page: Page;
    constructor(page: Page) {
      this.page = page;
      inspector = new Inspector();
      webActions = new WebActions(page);
    }

    async login(): Promise<void> {
      await webActions.navigateToURL(testConfig.url);

      await this.page.click(inspector.findHomePagePopUpOkButton());
      await webActions.delay(1);

      // await webActions.clickElement(inspector.findLoginButton());
      // await webActions.enterElementText(inspector.findUserIdInputBox(),testConfig.userId);
      // await webActions.enterElementText(inspector.findUserPasswordInputBox(),testConfig.userPass);
      // await webActions.waitForElementAttached(inspector.findLogoutButton());
      // console.log("Login SuccessFull");
      // let name = await this.page.locator(inspector.findUserNameandID()).allTextContents();
    }
    
    async enterFromStation(station:string){
      await webActions.enterElementText(inspector.findFromInput(),station);
      await webActions.clickElement(inspector.findEnteredStation());
    }

    async enterToStation(station:string){
      await webActions.enterElementText(inspector.findToInput(),station);
      await webActions.clickElement(inspector.findEnteredStation());
    }

    async enterDate(date:string){
      await this.page.fill(inspector.findDateInput(),"");
      await webActions.enterElementText(inspector.findDateInput(),date);
      await webActions.clickElement(inspector.findEnteredDate());
    }

    async selectGeneralQuota(){
      await webActions.clickElement(inspector.findQuotaDropdown());
      await webActions.clickElement(inspector.findQuotaFromList(1));
      console.log("General Quota Selected");
    }

    async fillJourneyDetails(from:string,to:string,date:string):Promise<void>{
      await this.enterFromStation(from);
      await this.enterToStation(to);
      await this.enterDate(date);
      await this.selectGeneralQuota();
    }

    async clickButtonByText(name:string):Promise<void>{
      await webActions.clickElement(inspector.findButtonbyText(name));
    }

    async isTrainListPageVisible():Promise<boolean>{
      let Visible = await webActions.page.isVisible(inspector.findTrainListPage());
      if (Visible) {
        console.log('> Train List Page is Visible.');
        return true
      } else {
        console.log('> Train List Page is not Visible.');
        return false
      }
    }
}