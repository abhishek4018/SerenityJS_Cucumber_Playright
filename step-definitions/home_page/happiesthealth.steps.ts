import { Given, Then } from '@cucumber/cucumber';
import { actorInTheSpotlight } from '@serenity-js/core';
import { Ensure, equals } from '@serenity-js/assertions';
import { By, Click, Navigate, PageElement, Text, isVisible } from '@serenity-js/web';
import { waitForElementWithXPath } from '../../test/utils';
import path from 'path';




Given('the user navigates to the Happiest Health homepage', async () => {
    await actorInTheSpotlight().attemptsTo(
        Navigate.to('')
    );
});

Then('the page title should be {string}', async (expectedTitle: string) => {
    await actorInTheSpotlight().attemptsTo(
        Ensure.that(Text.of(PageElement.located(By.css('title'))), equals(expectedTitle))
    );
});

Then('the logo should be visible', async () => {
    await actorInTheSpotlight().attemptsTo(waitForElementWithXPath('(//a[@href="/"])[1]', 15),
        Ensure.that(PageElement.located(By.xpath('(//a[@href="/"])[1]')), isVisible())
    );
});

Then('user clicks on the {string} button', async (buttonName: string) => {
    await actorInTheSpotlight().attemptsTo(waitForElementWithXPath('//button[text()="' + buttonName + '"]', 15),Click.on(PageElement.located(By.xpath('//button[text()="' + buttonName + '"]')))
    );
});