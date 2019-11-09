---
layout: null
---
function getById(id) { return document.getElementById(id) }
function showEl(str1, str2) { 
  document.querySelectorAll(str1+'>:not('+str2+')').forEach(function(x){
      if (!x.classList.contains("hidden")) {x.classList.add('hidden')}
    });
  document.querySelector(str1 +' '+ str2).classList.remove('hidden');
}
var app = "{{site.staticman.app}}",
    repo = "{{site.github-repo}}",
    branch = "/{{site.staticman.branch}}/",
    lang = document.querySelector('.navbar .lang [data-lang]').dataset.lang,
    commentForm = getById("comment-form"),
    cancel = getById("cancel-link");

(function(){
  document.addEventListener('DOMContentLoaded', function(){
    if (window.matchMedia("(min-width: 768px)").matches) {
      try {
        var timeOffset = new Date().getTimezoneOffset()/60; 
        if (timeOffset != 0) {
          s = (timeOffset < 0) ? "+": "-";
          timeOffset = s+('0'+Math.abs(timeOffset)).slice(-2)+':00';
          document.querySelectorAll('.comment-meta time').forEach(function(time) {
            time.insertAdjacentHTML('beforeend', '&thinsp;('+ timeOffset +')')
          });
        }
      } catch (e) {}
    }
    document.querySelectorAll('.comment-reply a').forEach(function (link) {
      link.addEventListener('click', function(){return addReply(link.dataset.i)})
    });
    commentForm.addEventListener('submit', function(e){
      e.preventDefault();
      getById("submit-comment").classList.add("disabled");
      showEl("#submit-comment", ".sending");
      makeRequest(app + "/v3/entry/github/"+ repo + branch + "comments_" + lang, this.getAttribute("method"),serialize(this),responseHandler);
      });
  });
})();

function makeRequest(url, method, data, callback) {
    var httpRequest;
    if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }
    httpRequest.onreadystatechange = (function() {
        return callback(httpRequest);
    });
    if (method && method.toUpperCase() == 'POST') {
        httpRequest.open(method, url, true);
        httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        httpRequest.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        httpRequest.send(data);
    } else {
        httpRequest.open(method, url);
        httpRequest.send();
    }
}

function responseHandler(httpRequest) {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status >= 200 && httpRequest.status < 400) {
      showEl("#submit-comment", ".ok");
      showEl(".alert",".ok");
      commentForm.reset();
      if (!cancel.classList.contains("hidden")){ cancel.classList.add("hidden") }
    } else {
      showEl("#submit-comment", ".err");
      showEl(".alert",".err");
    }
    getById("submit-comment").classList.remove('disabled');
  }
}

function serialize(form) {
  var serialized = [encodeURIComponent("fields[lang]") + "=" + encodeURIComponent(lang)];
  for (var i = 0; i < form.elements.length; i++) {
    var field = form.elements[i];
    if (!field.name || field.disabled || field.value === '' && field.name !== "fields[replying_to]" || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button' || field.type === 'select-multiple') {
      continue;
    } else if (field.type !== 'checkbox' && field.type !== 'radio' || field.checked) {
      serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
    }
  }
  return serialized.join('&');
}
/* Modified from https://github.com/mmistakes/made-mistakes-jekyll/blob/master/src/assets/javascripts/main.js */
/* Modified from https://core.svn.wordpress.org/trunk/wp-includes/js/comment-reply.js */
/* Released under the GNU General Public License - https://wordpress.org/about/gpl/ */
function addReply(parentId) {
  var div,
    respond = getById("feedback"),
    parent = getById("comment-parent"),
    comm = getById("comment-"+ parentId);

  if (!(comm && respond && cancel && parent && commentForm)) { return; }

  if (!getById("sm-temp-form-div")) {
    div = document.createElement("div");
    div.id = "sm-temp-form-div";
    div.classList.add("hidden");
    respond.parentNode.insertBefore(div, respond);
  }

  comm.parentNode.insertBefore(respond, comm.nextSibling);
  parent.value = parentId;
  cancel.classList.remove("hidden");

  cancel.addEventListener('click', function() {
    var temp = getById("sm-temp-form-div"),
      respond = getById("feedback");
    this.classList.add("hidden");
    if (!temp) { return; }
    getById("comment-parent").value = null;
    temp.parentNode.insertBefore(respond, temp);
    temp.parentNode.removeChild(temp);
    return false;
  });
  getById("comment-form-name").focus();
  return false;
};