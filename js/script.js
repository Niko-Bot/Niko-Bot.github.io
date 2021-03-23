function submit() {
    const color = document.getElementById('color');
    const plaintext = document.getElementById('plaintext');
    const iconUrl = document.getElementById('icon-url');
    const name = document.getElementById('name');
    const thumbUrl = document.getElementById('thumbnail-url');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const imgUrl = document.getElementById('image-url');
    const footIconUrl = document.getElementById('footer-icon-url');
    const footText = document.getElementById('footer-text');
    const elements = [color, plaintext, iconUrl, name, thumbUrl, title, description, imgUrl, footIconUrl, footText];

    const codeBox = document.getElementById('code-box');

    let code = {};
    let author = {};
    let footer = {};

    elements.forEach(value => {
        if (value.value !== '') {
            switch (value.id) {
                case 'color':
                    code['color'] = value.value;
                    break;
                case 'plaintext':
                    code['plaintext'] = value.value;
                    break;
                case 'icon-url':
                    author['icon_url'] = value.value;

                    code['author'] = author;
                    break;
                case 'name':
                    author['name'] = value.value

                    code['author'] = author;
                    break;
                case 'thumbnail-url':
                    code['thumbnail'] = {
                        "url": value.value
                    }
                    break;
                case 'title':
                    code['title'] = value.value;
                    break;
                case 'description':
                    code['description'] = value.value;
                    break;
                case 'image-url':
                    code['image'] = {
                        "url": value.value
                    }
                    break;
                case 'footer-icon-url':
                    footer['icon_url'] = value.value;

                    code['footer'] = footer;
                    break;
                case 'footer-text':
                    footer['text'] = value.value;

                    code['footer'] = footer;
                    break;
            }
        }
    });
    const codeStr = JSON.stringify(code, undefined, 4);
    codeBox.innerHTML = codeStr;
}

async function copy() {
    const codeBox = document.getElementById('code-box');
    await navigator.clipboard.writeText(codeBox.value).catch(error => {
        console.log(error);
    });

    const copyButton = document.getElementById('copy');
    copyButton.innerHTML = 'Copied!';
    copyButton.style.color = '#c09ef0';
    copyButton.style.background = '#1f1f1f';
    setTimeout(() => {
        copyButton.style.background = '#b4b4b4';
        copyButton.style.color = '#575757';
        copyButton.innerHTML = 'Copy';
    }, 3000);
}