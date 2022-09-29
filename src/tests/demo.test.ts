import { test, expect } from '@playwright/test';
import {Solvents} from '../solvents/solvent'

let solvent :Solvents;
test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  solvent=new Solvents(page);
  await solvent.login();
  await solvent.fillJourneyDetails("dure","howrah","30/09/2022");
  await solvent.clickButtonByText("Search");
  await page.waitForTimeout(3*1000);
  expect(await solvent.isTrainListPageVisible()).toBeTruthy();
  await page.waitForTimeout(300*1000);
});
