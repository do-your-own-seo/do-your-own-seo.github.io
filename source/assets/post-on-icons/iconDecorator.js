function getById(id) { return document.getElementById(id) }

var SVGs = getById('svgs'),
  icon = getById('example-icon'),
  iconName = 'icon-cat3',
  iconInnerHTML = icon.innerHTML,
  sizeSlider = getById('size-slider'),
  size = sizeSlider.value,
  shdw_1 = getById('shadow-1'),
  shdw_2 = getById('shadow-2'),
  shdw_3 = getById('shadow-3'),
  shadowIndicator = 0,
  left = SVGs.firstElementChild,
  right = SVGs.lastElementChild,
  color = '#272822',
  options = document.getElementsByClassName('option'),
  shadowColor = document.querySelector('[name="shadowColor"]'),
  shadowText = '',
  CSSforSVG = getById('svg-info'),
  CSSforIcon = getById('icon-info'),
  enlarged, prev, next, following;

document.addEventListener('DOMContentLoaded', function () {
  [].forEach.call(options, function (o) {
    if (o.dataset.color) {
      o.style.backgroundColor = o.dataset.color;
    }
    if (!window.matchMedia('screen and (min-width:420px)').matches) {
      o.classList.toggle('hidden');
    }
  });
  icon.style.fill = color;
});

function zoomInOut(element) {
  next = element.nextElementSibling;
  prev = element.previousElementSibling;
  element.classList.toggle('enlarged');
  left.classList.toggle('hidden');
  right.classList.toggle('hidden');
    [prev, next].forEach(function (item, i) {
    while (item && !item.classList.contains('arrow')) {
      item.classList.toggle('hidden');
      item = i ? item.nextElementSibling : item.previousElementSibling;
    }
  })
}

SVGs.onclick = function (e) {
  var element = e.target.closest('.iconset .box');
  if (element) { zoomInOut(element); }
};

[left, right].forEach(function (arrow, i, array) {
  arrow.onclick = function () {
    if (this.classList.contains('hidden')) { return }
    enlarged = document.querySelector('.iconset .enlarged');
    zoomInOut(enlarged);
    following = i ? enlarged.nextElementSibling : enlarged.previousElementSibling;
    if (following.classList.contains('arrow')) { following = i ? array[1 - i].nextElementSibling : array[1 - i].previousElementSibling }
    zoomInOut(following);
  }
});

//Editor functionality

getById('select-icon').onchange = function (e) {
  if (SVGs.textContent.split('\n').map(function (x) { return x.trim() }).indexOf(this.value) > -1) {
    iconName = this.value;
    sizeSlider.disabled = false;
    icon.innerHTML = iconInnerHTML.split('#')[0] + '#' + iconName + '"></use>';
    showCSSrules()
  } else {
    icon.innerHTML = '<text x="10" y="100"><tspan style="font-size:28px;font-weight:bold">Sorry, no icon</tspan></text>';
    sizeSlider.disabled = true;
    changeSize('200');
    sizeSlider.value = '200';
  }
  if (icon.classList.contains('flipped')) {
    icon.classList.remove('flipped');
    showCSSrules();
  }
};

getById('palette').onclick = function (e) {
  var tumbler = e.target.closest('#hide-palette');
  if (tumbler) {
    [].forEach.call(options, function (o) {
      o.classList.toggle('hidden');
    });
    return
  }
  if (e.target.dataset.color) {
    color = e.target.style.backgroundColor;
    icon.style.fill = color;
    showCSSrules();
  }
};

shadowColor.onchange = function (e) {
  if (shadowIndicator) {
    changeShadow(this.value);
    showCSSrules();
  }
};

getById('flip').onchange = function (e) {
  icon.classList.toggle('flipped');
  showCSSrules();
};

[shdw_1, shdw_2, shdw_3].forEach(function (slider) {
  slider.onchange = function (e) {
    if (slider.value * 1 !== 0) {
      shadowIndicator = 1;
      changeShadow(shadowColor.value);
      showCSSrules();
    } else if ([shdw_1, shdw_2, shdw_3].reduce(function (a, c) { return a + Math.abs(c.value) }, 0) == 0) {
      shadowIndicator = 0;
    }
  }
});

sizeSlider.oninput = function () { size = this.value;
  changeSize(size) };
sizeSlider.onchange = function () { size = this.value;
  changeSize(size) };

function changeSize(px) {
  icon.style.width = px + 'px';
  icon.style.height = px + 'px';
  icon.style.position = 'relative';
  icon.style.top = (200 - px) / 2 + 'px';
  showCSSrules();
}

function changeShadow(color) {
  shadowText = [shdw_1, shdw_2, shdw_3].reduce(function (a, c) { return a + (c.value * 1 ? c.value + 'px ' : '0 ') }, '') + color;
  icon.style.filter = 'drop-shadow(' + shadowText + ')';
  showCSSrules();
}

function showCSSrules() {
  var rows = 4,
    colsSVG = 40,
    colsIcon = 40;
  CSSforSVG.value = '.' + iconName + ' {\n  fill: ' + color + ';\n  width: ' + size + 'px; height: ' + size + ';\n}';
  CSSforIcon.value = '.' + iconName + ' {\n  color: ' + color + ';\n  font-size: ' + size + 'px;\n}';
  if (shadowIndicator) {
    CSSforSVG.value = CSSforSVG.value.split('\n}')[0] + '\n  -webkit-filter: drop-shadow(' + shadowText + ');\n  filter: drop-shadow(' + shadowText + ');\n}';
    CSSforIcon.value = CSSforIcon.value.split('\n}')[0] + '\n  text-shadow: ' + shadowText + ';\n}';
    rows += 2;
    colsSVG = 55;
    colsIcon = 42;
  }
  if (colsSVG !== colsIcon) {
    CSSforSVG.setAttribute('cols', colsSVG);
    CSSforIcon.setAttribute('cols', colsIcon);
  }
  if (icon.classList.contains('flipped')) {
    rows += 2;
  }
    [CSSforSVG, CSSforIcon].forEach(function (x) {
    if (icon.classList.contains('flipped')) {
      x.value = x.value.split('\n}')[0] + '\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n}';
    }
    x.setAttribute('rows', rows);
  });
}

[CSSforSVG, CSSforIcon].forEach(function (area) {
  area.onclick = function (e) { this.select() }
});
