import { Given, When, Then } from '@cucumber/cucumber';
import { actorInTheSpotlight } from '@serenity-js/core';
import { Ensure, equals } from '@serenity-js/assertions';
import { By, Click, Enter, Navigate, PageElement, PageElements, Text, isVisible, TakeScreenshot } from '@serenity-js/web';
import { waitForElementWithXPath } from '../../test/utils';

Given('the user navigates to {string}', { timeout: 300000 }, async (url: string) => {
    await actorInTheSpotlight().attemptsTo(
        Navigate.to(url),
        TakeScreenshot.of('Google landing page'),
        waitForElementWithXPath('//*[text()="Stay signed out"]', 15),
        Click.on(PageElement.located(By.xpath('//*[text()="Stay signed out"]'))),
    );
    // (Optional) Try multiple selectors for the consent button
    const consentSelectors = [
        'button[aria-label="Accept all"]',
        'button:has-text("I agree")',
        'button:has-text("Accept alles")',
        'button:has-text("Accept all")',
        'button:has-text("Alle akzeptieren")',
    ];
    for (const selector of consentSelectors) {
        try {
            await actorInTheSpotlight().attemptsTo(
                Ensure.that(PageElement.located(By.css(selector)), isVisible()),
                Click.on(PageElement.located(By.css(selector)))
            );
            break; // Stop after clicking the first visible consent button
        } catch (e) {
            // Try next selector
        }
    }
    // Wait for the search box to become visible
    // (You can add a similar wait here if needed)
});

When('the user searches for {string}', async (searchTerm: string) => {
    await actorInTheSpotlight().attemptsTo(
        Enter.theValue(searchTerm).into(PageElement.located(By.xpath('//*[@aria-label="Search"]'))),
        Ensure.that(PageElement.located(By.css('h3')), isVisible()),
    );
});

Then('the search results should contain relevant content about {string}', async (expected: string) => {
    const results = await actorInTheSpotlight().answer(
        Text.ofAll(PageElements.located(By.css('h3'))),
    );
    await actorInTheSpotlight().attemptsTo(
        Ensure.that(results.some(text => text.toLowerCase().includes(expected.toLowerCase())), equals(true)),
    );
}); 