const { icons } = require('./icons');
const { iconItem } = require('./iconItem');

var _listMode = true;
var _limit = 50;
const _listLimit = 50;
const _gridLimit = 100;

function toggleList(panel, btn, searchTerm) {
    const _list = panel.querySelector("#icons-list");
    _listMode = !_listMode;
    if(_listMode) {
        btn.firstChild.src = `./images/view-grid.png`;
        _limit = _listLimit;
        _list.className = '';
    } else {
        btn.firstChild.src = `./images/format-list-bulleted-square.png`;
        _limit = _gridLimit;
        _list.className = 'icons--list';
    }
    search(panel, searchTerm);
}

function setError(panel, total) {
    const _err = panel.querySelector("#err");
    if (total === 0) {
        _err.classList.remove('hide');
        _err.classList.add('show');
        _err.innerHTML = 'None found';
    } else
    if (total > _limit) {
        _err.classList.remove('hide');
        _err.classList.add('show');
        _err.innerHTML = `${_limit} of ${total} shown`;
    } else {
        _err.classList.remove('show');
        _err.classList.add('hide');
    }
}

function search(panel, searchTerm) {
    for(var i=0; i < _gridLimit; i++){
        const _icon = panel.querySelector('#icon-' + i);
        _icon.className = '';
        _icon.classList.add('hide');
    }
    var total = 0;
    let lookFor = new RegExp(searchTerm.toLowerCase());
    for(var i=0; i < icons.length; i++) {
        const icon = icons[i];
        if (lookFor.test(icon.search)) {
            if(total < _limit) {
                iconItem(panel, icon, total, _listMode);
            }
            total++;
        }
    }
    setError(panel, total);
}

module.exports = { search, toggleList };
