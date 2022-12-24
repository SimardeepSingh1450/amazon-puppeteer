
const fs=require('fs');
const puppeteer=require('puppeteer');

(async()=>{
    const browser=await puppeteer.launch({
        headless:false,
        defaultViewport:false
    });

    const page=await browser.newPage();
    await page.goto('https://www.amazon.in/Matlek-Bluetooth-Earbuds-Earphones-Headphones/dp/B0B1DC6QN9/ref=mp_s_a_1_49?keywords=earbuds&qid=1671910623&sprefix=ear%2Caps%2C291&sr=8-49', {waitUntil: 'load', timeout: 0});

    //await page.screenshot({path:'example.png',fullPage:true});
    //await page.pdf({path:'example.pdf',format:'A4'});

    //Fetch all the html on the page
    // const html=await page.content()
    // console.log(html);

    // const pageTitle=await page.evaluate(()=>{
    //     document.title
    // })
    // console.log(pageTitle)

    // const text=await page.evaluate(()=> document.body.innerText)
    // console.log(text);

// const links=await page.evaluate(()=> Array.from(document.querySelectorAll('a'),(e)=>({
//     link:e.href
// })))
// console.log(links);

// //Save the data extracted from page.evaluate in JSON in a file using fs module
// fs.writeFile('links.json',JSON.stringify(links),(err)=>{
//     if(err) throw err;
//     else console.log('File Saved');
// })

const headingText=await page.evaluate(()=> document.querySelector('#title_feature_div h1 span').innerText)

console.log(headingText)

await browser.close();
})().catch(err=>{
    console.log(err);
});