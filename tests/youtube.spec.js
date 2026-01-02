const { test, expect } = require('@playwright/test');

test('SongTest Youtube', async ({ page }) => {
  
  // 1. Navigate
  await page.goto('https://www.youtube.com/');

  await searchAndValidate(page, "Numb Linkin Park", "https://www.youtube.com/results?search_query=Numb+Linkin+Park",
    "yt-formatted-string[aria-label='Numb (Official Music Video) [4K UPGRADE] – Linkin Park 3 minutes, 8 seconds']", "[name='search_query']")

  
});


async function searchAndValidate(page, searchText, validURL, songTitleLocator, searchBoxLocator) {

  const inputField = page.locator(searchBoxLocator);
  await inputField.fill(searchText);
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(validURL);
  const keywords = searchText.split(/[ ,\.]+/);

  await keywords.forEach(word=>{
   expect(page.url()).toContain(word);
   
  })
//   const numbLocator = page.locator(songTitleLocator);
//  await expect(numbLocator).toHaveAttribute("aria-label");

//  const title = await numbLocator.getAttribute("aria-label");
//  console.log(title);

//   await console.log(numbLocator);
//   await console.log(numbLocator.innerText());
//   await console.log(numbLocator.getAttribute("aria-label"));

  await expect(page.locator(songTitleLocator)).toBeVisible();

  }

