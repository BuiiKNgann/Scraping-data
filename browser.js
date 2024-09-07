const puppeteer = require('puppeteer')

const startBrowser = async () => {
    let browser
    try {
        browser = await puppeteer.launch({
            headless: true,
            //chorme sử dụng multiple layers của sandbox để tránh những nội dung không đáng tin cậy
            // nếu tin tưởng content đúng thì set như vậy
            args: ["--disable-setuid-sandbox"],
            // truy cập website bỏ qua lỗi liên quan http secure
            'ignoreHTTPSErrors': true
        })



    } catch (error) {
        console.log('Không tạo được browser: ' + error);

    }
    return browser
}
module.exports = startBrowser