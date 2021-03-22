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

    let code = {}

    elements.forEach(value => {
        if (value !== '') {
            switch (value.id) {
                case 'plaintext':
                    code['plaintext'] = value.value
                case 'color':
                    code['color'] = value.value
                case 'icon-url':
                    code['author'] = {
                        'url': value.value
                    }
            }
        }
    });
    const codeStr = JSON.stringify(code, undefined, 4);
    codeBox.innerHTML = codeStr;
}

{/* <input type="color" id="color">

<input type="text" placeholder="Plaintext" id="plaintext" class="plaintext">

<input type="url" placeholder="Icon URL" id="icon-url">

<input type="text" placeholder="Name" id="name">

<input type="text" placeholder="Thumbnail URL" id="thumbnail-url">

<input type="text" placeholder="Title" id="title">

<input type="text" placeholder="Description" id="description">

<input type="url" placeholder="Image URL" id="image-url">

<input type="text" placeholder="Footer Icon URL" id="footer-icon-url">

<input type="text" placeholder="Footer Text" id="footer-text"> */}