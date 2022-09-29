export class Inspector {
    findHomePagePopUp(): string {
        return 'app-home >>div[role="dialog"].ng-trigger';
    }
    findHomePagePopUpOkButton():string{
        return 'app-home >> .ng-trigger >> button >>text=OK' ;
    }
    findLoginButton():string{
        return 'app-home >> app-header >> text=LOGIN'
    }
    findLogoutButton():string{
        return 'app-home >> app-header >> text=Logout'
    }

    findUserIdInputBox():string{
        return "app-login >> input[formcontrolname='userid']"
    }
    findUserPasswordInputBox():string{
        return "app-login >> input[formcontrolname='password']"
    }
    findUserNameandID():string{
        return 'app-home >> app-header >> span.ng-star-inserted'
    }

    findFromInput():string{
        return "app-jp-input.ng-star-inserted >> form > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) >>input"
    }
    findToInput():string{
        return "app-jp-input.ng-star-inserted >> form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) >>input"
    }
    findEnteredStation():string{
        return "app-jp-input.ng-star-inserted >> form > div:nth-child(2) > div:nth-child(1) >> ul > li:nth-child(1)"
    }

    findDateInput():string{
        return "app-jp-input.ng-star-inserted >> form > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) >>input"
    }
    findEnteredDate():string{
        return "app-jp-input.ng-star-inserted >> form > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) >>table >> a.ui-state-active"
    }

    findQuotaDropdown():string{
        return "app-jp-input.ng-star-inserted >> form > div:nth-child(3) >> p-dropdown"
    }
    findQuotaFromList(index:Number):string{
        return `app-jp-input.ng-star-inserted >> form > div:nth-child(3) >> p-dropdown >> ul > p-dropdownitem:nth-child(${index})`
    }
    findButtonbyText(name :string):string{
        return `app-main-page >> text=${name}`
    }
    findTrainListPage():string{
        return "app-home >> app-train-list >> div.tbis-div >> div.ng-star-inserted"
    }
}