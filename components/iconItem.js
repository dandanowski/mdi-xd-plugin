function iconItem(panel, icon, index, mode) {
    const _icon = panel.querySelector('#icon-' + index);
    var html = `<span class="icon--sample">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="${icon.path}" />
        </svg>
    </span>`;
    if (mode) {
        html += `<span class="icon--label">${icon.name}</span>`;
    }
    _icon.innerHTML = html;
    _icon.className = 'icon--item';
    _icon.setAttribute('name', icon.name);
    _icon.setAttribute('path', icon.path);
    if (mode) {
        _icon.setAttribute('title', icon.author);
    } else {
        _icon.setAttribute('title', icon.name + `\n` + icon.author);
    }
    if (icon.google === 'true') {
        _icon.classList.add('google');
    }
}

module.exports = {
    iconItem
};