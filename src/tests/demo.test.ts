import { test, expect } from '@playwright/test';
import {Solvents} from '../solvents/solvent'

let solvent :Solvents;
test('BookTicket', async ({ page }) => {
  solvent=new Solvents(page);
  await solvent.login();
  await solvent.fillJourneyDetails("dure","howrah","2/10/2022");
  await solvent.clickButtonByText("Search");
  await page.waitForTimeout(3*1000);
  // expect(await solvent.isTrainListPageVisible()).toBeTruthy();
  await solvent.selectTrainAndCoachSeat("12334","3A");
  await solvent.clickButtonByText("Book Now");
  if(await solvent.checkDialogBox()){
    await solvent.clickButtonByText("I Agree");}
  if(await solvent.checkDialogBox()){
    await solvent.clickButtonByText("Yes");}
  await page.waitForTimeout(300*1000);
});
