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
    findEnteredStation(station:string):string{
        return `app-jp-input.ng-star-inserted >> form > div:nth-child(2) > div:nth-child(1) >> ul > li:has-text('${station}')`
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
        return `button:has-text("${name}")`
    }
    findTrainListPage():string{
        return "app-home >> app-train-list >> div.tbis-div > div.ng-star-inserted"
    }
    findTrainBody():string{
        return "app-home >> app-train-list >> div.tbis-div > div.ng-star-inserted > div.ng-star-inserted > div:nth-child(1)"
    }
    findTrainCoachButton(coach :string):string{
        return  `td:has-text('${coach}')`
    }
    findTrainBookingDate():string{
        return  `app-train-avl-enq > div.ng-star-inserted > div:nth-child(7) >> td:nth-child(2)`
    }
    findTrainBookingDateByDate(date :string):string{
        return  `app-train-avl-enq > div.ng-star-inserted > div:nth-child(7) >> td:has-text('${date}') `
    }

    findDialogBox():string{
        return "app-train-list > p-confirmdialog > div"
    }
    
}