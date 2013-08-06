window.GS.tpl = {
    "getapp.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += '<a class="get-app" href="http://m.grooveshark.com/?noRedirect" target="_blank">\n    ' + _.getString("GET_APP", {
            platform: platform
        }) + " <span>" + _.getString("GET_IT_HERE") + "</span>\n</a>\n";
        return __p
    },
    "user_menu.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += '<h3 class="menu-gradient menu-subheader">' + _.escape(user.fName) + '</h3>\n<ul class="menu">\n    <li id="nav-user-profile" class="menu-icon">\n        <a href="' + _.escape(GS.h.href(user.baseURL)) + '" data-translate-text="PROFILE">' + _.getString("PROFILE") + '</a>\n    </li>\n    <li id="nav-user-collection" class="menu-icon">\n        <a href="' + _.escape(GS.h.href(user.baseURL)) + '/collection" data-translate-text="COLLECTION">' + _.getString("COLLECTION") + '</a>\n    </li>\n    <li id="nav-user-favorites" class="menu-icon">\n        <a href="' + _.escape(GS.h.href(user.baseURL)) + '/favorites" data-translate-text="FAVORITES">' + _.getString("FAVORITES") + '</a>\n    </li>\n    <li id="nav-user-playlists" class="menu-icon">\n        <a href="' + _.escape(GS.h.href(user.baseURL)) + '/playlists" data-translate-text="PLAYLISTS">' + _.getString("PLAYLISTS") + '</a>\n    </li>\n    <li id="nav-user-following" class="menu-icon">\n        <a href="' + _.escape(GS.h.href(user.baseURL)) + '/following" data-translate-text="FOLLOWING">' + _.getString("FOLLOWING") + "</a>\n    </li>\n</ul>\n";
        return __p
    },
    "ads/image_link_ad.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += '<div class="banner">\n    <a href="' + image.url + '"\n        ' + (image.not_blank ? "" : 'target="_blank"') + ' >\n        <img src="' + (image.src || image.src_alt) + '" alt="' + (image.alt || "") + '">\n    </a>\n    ', hasClose && (__p += '\n        <a class="button close-banner">' + _.getString("CLOSE_AD") + "</a>\n    "), __p += "\n</div>";
        return __p
    },
    "ads/list_ad.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += '<a href="' + image.url + '"\n    ' + (image.not_blank ? "" : 'target="_blank"') + ' >\n    <img src="' + (image.src || image.src_alt) + '" alt="' + (image.alt || "") + '">\n</a>';
        return __p
    },
    "ads/audio_ad.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) {
            __p += "";
            var style = "";
            style += "animation-duration: 0s;", style += "-webkit-animation-duration: 0s;", style = style.replace(/0/g, duration * 2), __p += '\n<div class="countdown">\n    <div class="ui-spinner">\n        <span class="side side-left"><span style="' + style + '" class="fill"></span></span>\n        <span class="side side-right"><span style="' + style + '" class="fill"></span></span>\n    </div>\n    <div class="timer">' + duration + "</div>\n    <p>" + _.getString("AUDIO_AD_MSG") + '</p>\n</div>\n<span class="button subscribe-ad">' + _.getString("GO_ADFREE") + '</span>\n<span class="button close-ad">' + _.getString("CLOSE_AD") + "</span>\n"
        }
        return __p
    },
    "shared/badge.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) {
            __p += "";
            var loading = !pic || !header,
                subheader = subheader || !1;
            __p += '\n<div class="submenu-gradient badge">\n', loading ? __p += '\n    <span class="badge-loading" data-translate-text="LOADING">' + _.getString("LOADING") + "</span>\n" : (__p += '\n    <img src="' + _.escape(pic) + '">\n    <div class="badge-content">\n        <h2>' + _.escape(header) + "</h2>\n        ", subheader && (__p += "\n        <h3>" + _.escape(subheader) + "</h3>\n        "), __p += "\n    </div>\n"), __p += "\n</div>\n"
        }
        return __p
    },
    "shared/show_more.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += '<li class="list-row list-row-more">\n    ', __p += '\n    <a class="overlay" href="' + GS.h.href(where) + '"></a>\n    <strong>' + what[0] + "</strong>\n    " + (what[1] ? _.getString("NUM_MORE", {
            number: what[1]
        }) : "") + "\n</li>\n";
        return __p
    },
    "shared/release_to_load.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += '<li class="list-row list-row-release-to-load"><em data-translate-text="RELEASE_TO_LOAD">' + _.getString("RELEASE_TO_LOAD") + "</em></li>\n";
        return __p
    },
    "little_queue/idle.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += '<p class="little-queue-idle">\n    ' + _.getString(number !== 1 ? "NUM_IN_QUEUE_MULTI" : "NUM_IN_QUEUE_SINGLE", {
            number: number
        }) + "\n</p>\n";
        return __p
    },
    "little_queue/song.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += '<img class="little-queue-image" src="' + song.picURL + '">\n<div class="little-queue-songdata">\n    <h2 class="little-queue-title">' + _.escape(song.name) + '</h2>\n    <p class="little-queue-meta">' + _.escape(song.ArtistName) + " - " + _.escape(song.AlbumName) + '</p>\n</div>\n<div class="little-queue-state loading"></div>\n';
        return __p
    },
    "now_playing/now_playing.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += '<div class="now-playing">\n    <div class="progress ' + (hasSong ? "hidden" : "") + '">\n        <span class="now-playing-played">' + songProgress[0] + '</span>\n        <div class="progressbar">\n            <div class="progressbar-loaded" style="width: ' + loaded + '%"></div>\n            <div class="progressbar-progress" style="width: ' + percentage + '%">\n                <div class="progressbar-scrubber"></div>\n            </div>\n        </div>\n        <span class="now-playing-total">' + songProgress[1] + '</span>\n    </div>\n\n    <a href="' + GS.h.href("/now-playing") + '" class="button song-page-play-now hidden" data-translate-text="PLAY_NOW">' + _.getString("PLAY_NOW") + '</a>\n</div>\n<div class="now-playing-image">\n    ', __p += "\n    <img " + (songImage ? 'src="' + songImage + '"' : "") + ' class="' + (songImage ? "" : "hidden") + '">\n</div>\n';
        return __p
    },
    "now_playing/queue.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) {
            __p += '<div id="queue-header" class="popover-header black-bar">\n    <a class="menu-gradient button popover-back" data-translate-text="BACK">' + _.getString("BACK") + '</a>\n    <a class="menu-gradient button popover-switch"><span></span></a>\n</div>\n<div class="popover-content">\n</div>\n<ul id="queue-actions" class="popover-actions black-bar queue-actions">\n    <li class="queue-actions-prev"></li>\n    ';
            var stateClass = "";
            loading ? stateClass = "queue-actions-loading" : playing && (stateClass = "queue-actions-playing"), __p += '\n    <li class="queue-actions-paused ' + stateClass + '"></li>\n    <li class="queue-actions-next"></li>\n</ul>\n'
        }
        return __p
    },
    "now_playing/queue_actions.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) {
            __p += "";
            var shuffleClasses = "",
                repeatClasses = "";
            isRadioOn && (shuffleClasses += " queue-list-action-disabled", repeatClasses += " queue-list-action-disabled"), prefs.shuffle && (shuffleClasses += " queue-list-action-shuffle"), prefs.repeat && (repeatClasses += " queue-list-action-repeat"), __p += '\n<li class="queue-list-action queue-list-action-ordered ' + shuffleClasses + '"></li>\n<li class="queue-list-action queue-list-action-norepeat ' + repeatClasses + '"></li>\n<li class="queue-list-action queue-list-action-edit"></li>\n<li class="queue-list-action queue-list-action-clear"></li>\n'
        }
        return __p
    },
    "now_playing/queue_actions_edit.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += '<li class="menu-gradient button queue-list-action-done" data-translate-text="DONE">' + _.getString("DONE") + "</li>\n";
        return __p
    },
    "now_playing/queue_header.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += "<h2>" + _.escape(song.name) + "</h2>\n<h3>" + _.escape(song.ArtistName) + " - " + _.escape(song.AlbumName) + "</h3>\n";
        return __p
    },
    "now_playing/queue_song_list_row.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += '<li data-cid="' + song.cid + '" class="list-row song-row queue-song-row ' + (isCurrent ? "current" : "") + '">\n    <img src="' + song.attributes.picURL + '">\n    <a class="song-row-remove"></a>\n    <h2 class="title">' + _.escape(song.attributes.name) + '</h2>\n    <h3 class="byline">' + _.escape(song.attributes.ArtistName) + " - " + _.escape(song.attributes.AlbumName) + '</h3>\n    <span class="queue-song-row-move">\n        <a class="queue-song-row-move-up"></a>\n        <a class="queue-song-row-move-down"></a>\n    </span>\n</li>\n';
        return __p
    },
    "pages/search/form.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) {
            __p += "";
            var query = query || "";
            __p += '\n<form class="search" method="GET">\n    <span class="input-reduce">\n        <input type="search" placeholder="' + _.getString("SEARCH_FOR_MUSIC") + '" name="q" value="' + _.escape(query) + '">\n    </span>\n</form>\n'
        }
        return __p
    },
    "pages/search/results.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += '<h5 class="sub-header" data-translate-text="SONGS">' + _.getString("SONGS") + '</h5>\n<div id="search-results-songs">\n    ', songsNumber === 0 && (__p += '\n    <p class="search-results-notfound" data-translate-text="NO_SONGS_FOUND">' + _.getString("NO_SONGS_FOUND") + "</p>\n    "), __p += '\n</div>\n<h5 class="sub-header" data-translate-text="ALBUMS">' + _.getString("ALBUMS") + '</h5>\n<div id="search-results-albums">\n    ', albumsNumber === 0 && (__p += '\n    <p class="search-results-notfound" data-translate-text="NO_ALBUMS_FOUND">' + _.getString("NO_ALBUMS_FOUND") + "</p>\n    "), __p += '\n</div>\n<h5 class="sub-header" data-translate-text="PLAYLISTS">' + _.getString("PLAYLISTS") + '</h5>\n<div id="search-results-playlists">\n    ', playlistsNumber === 0 && (__p += '\n    <p class="search-results-notfound" data-translate-text="NO_PLAYLISTS_FOUND">' + _.getString("NO_PLAYLISTS_FOUND") + "</p>\n    "), __p += "\n</div>\n";
        return __p
    },
    "pages/homepage.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += "", haveSongs && (__p += '\n<h5 class="sub-header" data-translate-text="RECENT_LISTENS">' + _.getString("RECENT_LISTENS") + '</h5>\n<div id="home-recent-songs"></div>\n'), __p += '\n<h5 class="sub-header" data-translate-text="STATIONS">' + _.getString("STATIONS") + '</h5>\n<div id="home-stations"></div>\n';
        return __p
    },
    "pages/stations/controls.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += '<div id="current-station">\n    <span class="station-name">' + station.title + '</span>\n</div>\n<div id="button-bar">\n    <span class="button smile" data-translate-text="VOTE_UP">' + _.getString("VOTE_UP") + '</span>\n    <span class="button frown" data-translate-text="VOTE_DOWN">' + _.getString("VOTE_DOWN") + "</span>\n</div>\n";
        return __p
    },
    "pages/stations/list.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += "", _.each(stations, function (e) {
            __p += "\n";
            var t = active && active.id == e.id ? "list-row-station-playing" : "";
            __p += '\n    <li data-station-id="' + e.id + '" class="list-row list-row-station ' + t + "\">\n    <h2 class='station-title' data-translate-text=\"" + e.get("locale") + '">' + _.getString(e.get("locale")) + "</h2>\n    </li>\n"
        }), __p += "\n";
        return __p
    },
    "pages/profile/count_list.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) {
            __p += "";

            function numberClass(e, t) {
                var n = ["submenu-gradient", "list-counts-number"];
                return n.push("list-counts-" + t), !e && n.push("list-counts-loading"), n.join(" ")
            }
            __p += '\n<ul class="list-counts">\n    <li>\n        <a href="' + GS.h.href(user.baseURL) + '/collection">\n            ' + _.getString("COLLECTION") + '\n            <span class="' + numberClass(library.loaded(), "library") + '">\n                ' + library.length + '\n            <span>\n        </a>\n    </li>\n    <li>\n        <a href="' + GS.h.href(user.baseURL) + '/favorites">\n            ' + _.getString("FAVORITES") + '\n            <span class="' + numberClass(favorites.loaded(), "favorites") + '">\n                ' + favorites.length + '\n            <span>\n        </a>\n    </li>\n    <li>\n        <a href="' + GS.h.href(user.baseURL) + '/playlists">\n            ' + _.getString("PLAYLISTS") + '\n            <span class="' + numberClass(playlists.loaded(), "playlists") + '">\n                ' + playlists.length + '\n            <span>\n        </a>\n    </li>\n    <li>\n        <a href="' + GS.h.href(user.baseURL) + '/following">\n            ' + _.getString("FOLLOWING") + '\n            <span class="' + numberClass(following.loaded(), "following") + '">\n                ' + following.length + "\n            <span>\n        </a>\n    </li>\n</ul>"
        }
        return __p
    },
    "pages/session/login.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += '<form class="common-form login-form">\n    <h1 data-translate-text="LOGIN_HEADER">' + _.getString("LOGIN_HEADER") + '</h1>\n\n    <p class="form-error" data-translate-text="LOGIN_ERROR">' + _.getString("LOGIN_ERROR") + '</p>\n\n    <fieldset>\n        <input name="username" class="input-text" type="text" placeholder="' + _.getString("USERNAME_OR_EMAIL") + '" autocorrect="off" autocapitalize="off" required>\n        <input name="password" class="input-text" type="password" placeholder="' + _.getString("PASSWORD") + '" autocorrect="off" autocapitalize="off" required>\n    </fieldset>\n\n    <input type="submit" class="large-button submit" value="' + _.getString("LOGIN_SUBMIT") + '">\n    <a class="forgot-password" href="' + GS.h.href("/forgot") + '" data-translate-text="LOGIN_FORGOT">' + _.getString("LOGIN_FORGOT") + "</a>\n</form>\n";
        return __p
    },
    "pages/session/forgot_pass.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += '<form class="common-form forgotpass-form">\n    <p>\n        <span data-translate-text="FORGOT_PW_MSG">' + _.getString("FORGOT_PW_MSG") + '</span>\n        <a href="' + GS.h.href("/login") + '" data-translate-text="FORGOT_PW_LOGIN">' + _.getString("FORGOT_PW_LOGIN") + '</a>\n    </p>\n\n    <p class="form-notice" data-translate-text="FORGOT_PW_SUCCESS">' + _.getString("FORGOT_PW_SUCCESS") + '</p>\n    <p class="form-error" data-translate-text="LOGIN_ERROR">' + _.getString("LOGIN_ERROR") + '</p>\n\n    <fieldset>\n        <input name="usernameOrEmail" class="input-text" type="text" placeholder="' + _.getString("FORGOT_PW_ERROR") + '" autocorrect="off" autocapitalize="off" required>\n    </fieldset>\n\n    <input type="submit" class="large-button submit" value="' + _.getString("FORGOT_PW_SUBMIT") + '">\n</form>\n';
        return __p
    },
    "pages/session/signup.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) {
            __p += '<form class="common-form signup-form">\n    <fieldset>\n        <input class="input-text" autocorrect="off" autocomplete="off" autocapitalize="off"\n            required placeholder="' + _.getString("EMAIL") + '"\n            name="email" type="text">\n        <input class="input-text" autocorrect="off" autocomplete="off" autocapitalize="off"\n            required placeholder="' + _.getString("DISPLAY_NAME") + '"\n            name="username" type="text">\n        <input class="input-text" autocorrect="off" autocomplete="off" autocapitalize="off"\n            required placeholder="' + _.getString("PASSWORD") + '"\n            name="password" type="password">\n        <input class="input-text" autocorrect="off" autocomplete="off" autocapitalize="off"\n            required placeholder="' + _.getString("CONFIRM_PW") + '"\n            name="password2" type="password">\n    </fieldset>\n\n    ';
            var months = _.getString("MONTHS");
            months = months ? months.split(",") : [], __p += "\n    ", __p += '\n    <div class="selects-dob"><!--\n     --><select name="dob-day" class="select-dob-day">\n            <option value disabled selected>' + _.getString("DAY") + "</option>\n            ";
            for (var i = 1; i <= 31; i++) __p += '\n                <option value="' + i + '">' + i + "</option>\n            ";
            __p += '\n        </select><!--\n     --><select name="dob-month" class="select-dob-month">\n            <option value disabled selected>' + _.getString("MONTH") + "</option>\n            ";
            for (var i = 0; i < months.length; i++) __p += '\n                <option value="' + i + '">' + months[i] + "</option>\n            ";
            __p += '\n        </select><!--\n     --><select name="dob-year" class="select-dob-year">\n            <option value disabled selected>' + _.getString("YEAR") + "</option>\n            ";
            for (var i = (new Date).getFullYear(); i >= 1889; i--) __p += '\n                <option value="' + i + '">' + i + "</option>\n            ";
            __p += '\n        </select><!--\n --></div>\n\n    <p class="double-margin">\n        ';
            var link = '<a href="http://www.grooveshark.com/terms" target="_blank">[]</a>';
            link = link.replace("[]", _.getString("TOS")), __p += "\n        " + _.getString("TOS_AGREE", {
                link: link
            }) + '\n    </p>\n\n    <input type="submit" class="large-button submit" value="' + _.getString("SIGNUP_SUBMIT") + '">\n</form>\n'
        }
        return __p
    },
    "playlists/list.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += "", _.each(models, function (e, t) {
            __p += "\n";
            var n = e.attributes,
                r = n.PlaylistID;
            __p += '\n<li data-playlist-id="' + r + '" class="list-row playlist-row">\n    <a class="overlay" href="' + GS.h.href(n.baseURL) + '"></a>\n    <h2 class="title">' + _.escape(n.Name) + "</h2>\n</li>\n"
        }), __p += "\n";
        return __p
    },
    "albums/list.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += "", _.each(models, function (e, t) {
            __p += "\n";
            var n = e.attributes,
                r = n.AlbumID;
            __p += '\n<li data-album-id="' + r + '" class="list-row album-row">\n    <a class="overlay" href="' + GS.h.href(n.baseURL) + '"></a>\n    <img src="' + n.picURL + '">\n    <h2 class="title">' + _.escape(n.Name) + "</h2>\n</li>\n"
        }), __p += "\n";
        return __p
    },
    "users/list.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += "", _.each(models, function (e, t) {
            __p += "\n";
            var n = e.attributes,
                r = n.userID;
            __p += '\n<li data-user-id="' + r + '" class="list-row user-row">\n    ', n.picURL && (__p += '\n    <img src="' + n.picURL + '">\n    '), __p += '\n    <a class="overlay" href="' + GS.h.href(n.baseURL) + '"></a>\n    <h2 class="title">' + _.escape(n.fName) + "</h2>\n</li>\n"
        }), __p += "\n";
        return __p
    },
    "song_list/context_menu.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += '<ul class="context-menu">\n    <li class="play-now"></li>\n    <li class="play-next"></li>\n    <li class="play-last"></li>\n    <li class="add-to-favs"></li>\n    <li class="add-to-coll"></li>\n</ul>\n';
        return __p
    },
    "song_list/header.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += '<span class="submenu-gradient list-header-left button list-header-play-now"><span data-translate-text="PLAY_NUM">' + _.getString("PLAY_NUM", {
            number: count
        }) + '</span></span>\n<span class="submenu-gradient list-header-right button list-header-sort"><span data-translate-text="SORT">' + _.getString("SORT") + "</span></span>\n";
        return __p
    },
    "song_list/sort.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += "<ul>\n", __p += "\n", _.each(choices, function (e, t) {
            __p += "\n    ";
            var n = e[1] === sorted.field ? "selected" : "";
            __p += "\n    ";
            var r = e[1] === sorted.field && sorted.reverse ? "desc" : "asc";
            __p += '\n    <li class="' + n + " " + r + '" action-id="' + e[1] + '" data-translate-text="' + e[0] + '">' + _.getString(e[0]) + "</li>\n"
        }), __p += "\n</ul>\n";
        return __p
    },
    "song_list/song_list.ejs": function (obj) {
        var __p = "",
            print = function () {
                __p += Array.prototype.join.call(arguments, "")
            };
        with(obj || {}) __p += "", _.each(models, function (e, t) {
            __p += "\n";
            var n = e.attributes,
                r = e.isFavorited(),
                i = r || e.isAdded();
            __p += '\n<li data-song-id="' + n.SongID + '" class="list-row song-row ' + (r ? "is-faved is-added" : i ? "is-added" : "") + '">\n    <a class="context-menu-button"></a>\n    <img src="' + n.picURL + '">\n    <h2 class="title"> ' + _.escape(n.name) + ' </h2>\n    <h3 class="byline"> ' + _.escape(n.ArtistName) + " - " + _.escape(n.AlbumName) + " </h3>\n</li>\n"
        }), __p += "\n";
        return __p
    }
},
function (e, t) {
    GS.models._Storage = {
        store: function () {
            GS.h.write(this.storageKey, this.toJSON())
        },
        read: function () {
            var e = GS.h.read(this.storageKey);
            if (!e) return;
            this.reset && this.reset(e, {
                silent: !0
            }), this.set && this.set(e, {
                silent: !0
            })
        }
    }, GS.models._Loaded = {
        fetch: function (e) {
            e = e || {};
            var t, n = this;
            return e.success && (t = e.success), _.extend(e, {
                success: function (e, r, i) {
                    n._loaded = !0, t && t(e, r, i)
                }
            }), Backbone.Collection.prototype.fetch.call(this, e)
        },
        loaded: function () {
            return this.length > 0 || !! this._loaded
        }
    }, _.mixin({
        UUID: function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                var t = Math.random() * 16 | 0,
                    n = e == "x" ? t : t & 3 | 8;
                return n.toString(16)
            }).toUpperCase()
        },
        getString: function (e, n) {
            var r = $.localize.getString(e),
                i = [],
                s, o = /^[^\{]+/,
                u = /^\{(.*?)\}/;
            r = typeof r == "undefined" ? "" : r;
            if (!n) return r;
            while (r) {
                if (s = o.exec(r)) i.push(s[0]);
                else {
                    if (!(s = u.exec(r))) throw "Error rendering data object";
                    var a = s[1];
                    n[a] !== t ? i.push(n[a]) : i.push(s[0])
                }
                r = r.substring(s[0].length)
            }
            return i.join("")
        }
    }), e.GS.h = {
        prefix: function (e) {
            return "#!" + e
        },
        href: function (e) {
            return "/" + GS.h.prefix(e)
        },
        navigate: function (t) {
            e.location.hash = GS.h.prefix(t)
        },
        isProduction: function () {
            return GS.config.runMode === "production"
        },
        getTemplate: function (e) {
            if (GS.config.runMode === "dev") {
                var t = document.getElementById(e);
                if (t) {
                    var n = _.template($(t).html());
                    return function (e) {
                        return n(e).replace(/(\s+$|^\s+|\n)/mg, "")
                    }
                }
                throw new Error("Can't find template " + e)
            }
            if (GS.tpl[e]) return function (t) {
                return GS.tpl[e](t).replace(/(\s+$|^\s+|\n)/mg, "")
            };
            throw new Error("Can't find compiled template " + e)
        },
        prettyDuration: function (e) {
            var t = ~~ (e / 60),
                n = ~~e - t * 60;
            return [t < 10 ? "0" + t : t, n < 10 ? "0" + n : n].join(":")
        },
        isRetina: function () {
            return e.devicePixelRatio && e.devicePixelRatio >= 2
        },
        isAndroid2: function () {
            return $.os.android && parseInt($.os.version, 10) === 2
        },
        isAndroid4: function () {
            return $.os.android && parseInt($.os.version, 10) === 4
        },
        os: function () {
            var e = [];
            for (var t in $.os) {
                if (t == "version" || t == "tablet" || t == "phone") continue;
                $.os[t] && e.push(t)
            }
            return e.length === 0 && (e = ["desktop"]), [e.join("-"), $.os.version || "undetected"]
        }(),
        browser: function () {
            if (!$.browser.webkit) return ["non-webkit", 0];
            var e = [];
            for (var t in $.browser) {
                if (t == "version" || t == "webkit") continue;
                $.browser[t] && e.push(t)
            }
            return e.length === 0 && (e = ["webkit"]), [e.join("-"), $.browser.version]
        }(),
        makeMessage: function (e) {
            return '<p class="message">' + _.escape(e) + "</p>"
        },
        latestTag: function () {
            var e;
            return function (n) {
                return n !== t ? e = n : e
            }
        }(),
        changeLanguage: function (t) {
            GS.locales.valid.indexOf(t) === -1 && (t = "en");
            if (t !== this.lastLang) return $("[data-translate-text]").localize("gs", {
                language: t
            }).done(_.bind(function () {
                e.GS.config.lang = this.lastLang = t
            }, this))
        },
        readError: function (e) {
            e -= 1;
            var t = ["MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"];
            return t[e] ? t[e] : "Unkown media error " + e
        },
        lowerCase: function (e) {
            var t = {}, n;
            return _.each(e, function (e, r) {
                n = r[0].toLowerCase(), r[0] !== n && (r = n + r.slice(1)), e && (t[r] = e)
            }), t
        },
        getBodyScrollHeight: function () {
            return Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
        },
        write: function (t, n, r) {
            _.delay(function () {
                try {
                    e.localStorage.setItem(t, JSON.stringify(n))
                } catch (i) {
                    console.error("localStorage write error:", i), r && GS.h.writeCookie(t, n, {
                        expires: 365
                    })
                }
            }, 50)
        },
        read: function (t, n) {
            var r;
            try {
                r = e.localStorage.getItem(t), r && (r = JSON.parse(r))
            } catch (i) {
                console.error("localStorage read error:", i), r = null
            }
            return n && !r && (r = GS.h.readCookie(t)), r
        },
        writeCookie: function (e, t, n) {
            n = _.extend({}, n, {
                expires: 7
            });
            if (typeof n.expires == "number") {
                var r = n.expires,
                    i = n.expires = new Date;
                i.setDate(i.getDate() + r)
            }
            return document.cookie = [encodeURIComponent(e), "=", JSON.stringify(t), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
        },
        removeCookie: function (e) {
            return GS.h.writeCookie(e, t, {
                expires: -1
            })
        },
        readCookie: function (e) {
            var t = document.cookie.split("; ").map(function (e) {
                return e.split("=")
            });
            for (var n = 0; n < t.length; n++)
                if (encodeURIComponent(e) === t[n][0]) return JSON.parse(t[n][1]);
            return null
        }
    };
    var n = function () {};
    e.console || (e.console = {}), ["log", "error", "info", "warn"].forEach(function (t) {
        e.console[t] || (e.console[t] = n)
    })
}(this),
function (e, t) {
    function i() {
        this.requests = [], this.pendingRequest = null
    }

    function s(e, t, n, r, i) {
        function o(e) {
            s.isPending = !1, s.lastResolution = (new Date).valueOf()
        }
        this.method = e || "", this.parameters = t || {}, this.options = n || {}, this.useHTTPS = r || !1, this.useSWF = !1, this.type = "normal", this.failedAuth = !1, this.isPending = !1, this.numRetries = 0, this.lastFault = null, this.lastResolution = 0, this.successFilters = [], this.faultFilters = [], this._dfd = _.Deferred();
        var s = this;
        this.promise().always(o)
    }

    function o() {
        var e = "";
        for (var t = 0; t < 6; t++) e += Math.floor(Math.random() * 16).toString(16);
        return e != r.lastRandomizer ? e : o()
    }

    function u(e) {
        e = e || {};
        var t = {
            client: r.client,
            clientRevision: r.clientRevision,
            privacy: r.privacy,
            country: r.country,
            uuid: r.uuID
        };
        return r.sessionID && (t.session = r.sessionID), _.extend(t, e)
    }

    function a(e, t) {
        e || (e = {
            fault: {
                message: "Empty Result",
                code: r.faultCodes.EMPTY_RESULT
            }
        }), e.header && f(e.header);
        if (e.fault) l(e, t);
        else {
            var n = e.result;
            n === null && t.method !== "logoutUser" ? t.reject({
                message: "data.result is `null`"
            }) : t.resolve(typeof e.result != "undefinded" ? e.result : e)
        }
    }

    function f(e) {
        var t = e.session;
        t && t != r.sessionID && (r.sessionID = t, r.tokenPending = !1, c()), e.expiredClient && (r.clientExpired = !0, alert(_.getString("EXPIRED_SITE_MSG") + " (#1)"))
    }

    function l(e, t) {
        if (e && e.code) {
            console.log("HANDLE FAULT CODE", e.code, t.method);
            if (e.code == r.faultCodes.INVALID_TOKEN) {
                var n = (new Date).valueOf();
                if ((!r.lastTokenFailed || n - r.lastTokenFailed >= 3e5) && t.numRetries === 0) {
                    r.lastTokenFailed = !1, t.isPending = !1, t.numRetries++, r.callsPendingToken.push(t), c();
                    return
                }
            } else {
                if (e.code == r.faultCodes.HTTP_TIMEOUT || e.code == r.faultCodes.EMPTY_RESULT) {
                    t.lastFault = e, t.retry(100 + t.numRetries * 100);
                    return
                }
                e.code != r.faultCodes.MAINTENANCE && (e.code == r.faultCodes.INVALID_CLIENT ? alert(_.getString("EXPIRED_SITE_MSG") + " (#2)") : e.code == r.faultCodes.INVALID_SESSION && alert(_.getString("EXPIRED_SITE_MSG") + " (#3)"))
            }
        }
        t.reject(e)
    }

    function c() {
        var e, t;
        if (r.tokenPending) return;
        h(), r.tokenPending = !0, r.sessionID ? (e = hex_md5(r.sessionID), t = s.createRequest(!1, "getCommunicationToken", {
            secretKey: e
        }, {}, !0), t.promise().then(p, function (e) {
            d(e, t)
        }), t.send()) : (t = s.createRequest(!1, "initiateSession"), t.send())
    }

    function h() {
        r.currentToken = null, r.tokenExpires = 0
    }

    function p(e) {
        var t = new Date;
        r.lastTokenFailed = !1, r.currentToken = e, r.tokenPending = !1, r.tokenExpires = 15e5 + t.valueOf();
        var n;
        while (r.callsPendingToken.length) n = r.callsPendingToken.shift(), n.send()
    }

    function d(e, t) {
        var n = new Date;
        r.tokenPending = !1, r.lastTokenFailed = n.valueOf();
        var i;
        while (r.callsPendingToken.length) i = r.callsPendingToken.shift(), i.reject({
            message: "SERVICE_CREATE_TOKEN_FAIL",
            code: r.faultCodes.INVALID_TOKEN
        })
    }
    var n = "gooeyFlubber",
        r = {
            faultCodes: {
                INVALID_CLIENT: 1024,
                RATE_LIMITED: 512,
                INVALID_TOKEN: 256,
                INVALID_SESSION: 16,
                MAINTENANCE: 10,
                MUST_BE_LOGGED_IN: 8,
                HTTP_TIMEOUT: 6,
                PARSE_ERROR: 4,
                HTTP_ERROR: 2,
                EMPTY_RESULT: -256
            },
            headers: {
                client: "mobileshark",
                clientRevision: "20120830"
            },
            revToken: n,
            defaultEndpoint: "more.php",
            uuID: _.UUID(),
            country: {
                ID: "1",
                CC1: "0",
                CC2: "0",
                CC3: "0",
                CC4: "0",
                IPR: "1"
            },
            sessionID: null,
            privacy: 0,
            currentToken: null,
            tokenExpires: 0,
            tokenPending: !1,
            lastTokenFailed: !1,
            lastRandomizer: null,
            downForMaintenance: !1,
            lastDowntimeNotification: 0,
            clientExpired: !1,
            callsPendingToken: []
        };
    i.prototype.queue = function (e) {
        function t() {
            if (this.requests.length) {
                this.pendingRequest = this.requests.shift();
                var e = this,
                    n = function () {
                        e.pendingRequest = null, t.call(e)
                    };
                this.pendingRequest.promise().always(n), this.pendingRequest.send()
            }
        }
        this.requests.push(e), this.pendingRequest || t.call(this)
    }, s.createRequest = function (e) {
        var t = [].slice.call(arguments, 1),
            n = (new Date).valueOf(),
            r = new this;
        this.apply(r, t);
        if (e) {
            var i = r.getCacheKey(),
                s = r.pendingCallCache[i];
            s && (!s.isResolved() || n - s.lastResolution < 6e5) ? r = s : r.pendingCallCache[i] = r
        }
        return r
    }, s.prototype.promise = function () {
        return this._dfd.promise()
    }, s.prototype.isResolved = function () {
        return this._dfd.isResolved()
    }, s.prototype.isRejected = function () {
        return this._dfd.isRejected()
    }, s.prototype.resolve = function (e) {
        for (var t = 0; t < this.successFilters.length; t++) _.isFunction(this.successFilters[t]) && (e = this.successFilters[t](e));
        this.lastResolution = (new Date).valueOf(), this._dfd.resolve(e)
    }, s.prototype.resolveWith = function (e, t) {
        for (var n = 0; n < this.successFilters.length; n++) _.isFunction(this.successFilters[n]) && (t = this.successFilters[n](t));
        this.lastResolution = (new Date).valueOf(), this._dfd.resolveWith(e, t)
    }, s.prototype.reject = function (e) {
        for (var t = 0; t < this.faultFilters.length; t++) _.isFunction(this.faultFilters[t]) && (e = this.faultFilters[t](e));
        this._dfd.reject(e)
    }, s.prototype.rejectWith = function (e, t) {
        for (var n = 0; n < this.faultFilters.length; n++) _.isFunction(this.faultFilters[n]) && (t = this.faultFilters[n](t));
        this._dfd.rejectWith(e, t)
    }, s.prototype.pendingCallCache = [], s.prototype.cacheKeyProps = ["method", "parameters", "type"], s.prototype.getCacheKey = function () {
        var e, t, n = "";
        for (e in this.cacheKeyProps) this.cacheKeyProps.hasOwnProperty(e) && (t = this[this.cacheKeyProps[e]], t instanceof String ? n += t : n += JSON.stringify(t));
        return hex_md5(n)
    }, s.prototype.send = function (t) {
		console.log(s)
        t && t.length == 2 && this.promise().then(t[0], t[1]);
        var n = this,
            i = !0,
            s = (new Date).valueOf();
        if (this.isPending || this.isResolved()) return;
        if (r.clientExpired) {
            this.reject({
                message: "POPUP_INVALID_CLIENT_MSG",
                code: r.faultCodes.INVALID_CLIENT
            });
            return
        }
        this.isPending = !0;
        if (this.numRetries >= 3) {
            this.reject(this.lastFault);
            return
        }
        this.numRetries > 0 && (i = !1);
        if (this.type == "facebook" || this.type == "lastfm") return;
        if (r.tokenExpires > s || ["getCommunicationToken", "initiateSession", "getServiceStatus"].indexOf(this.method) != -1) {
            if (r.downForMaintenance && this.method != "getServiceStatus") {
                this.reject({
                    message: "SERVICE_DOWN_MAINTENANCE",
                    code: r.faultCodes.MAINTENANCE
                });
                return
            }
            var f = {}, h = "/" + r.defaultEndpoint + "?" + this.method;
            this.useHTTPS && (h = "https://" + e.location.host + h), f.header = u(r.headers), f.method = this.method, f.parameters = this.parameters;
            if (this.method === "getStreamKeyFromSongIDEx" || this.method === "getSongFromToken") f.parameters.country = f.header.country;
            if (r.currentToken) {
                var p;
				console.log(r);
                r.lastRandomizer = o(), p = hex_sha1([this.method, r.currentToken, r.revToken, r.lastRandomizer].join(":")), f.header.token = r.lastRandomizer + p
            }
            if (this.useHTTPS && e.XDomainRequest) {
                var d = m++;
                g[d] = function (e) {
                    if (e.success) a(e.data, n);
                    else {
                        var t = {};
                        switch (e.error) {
                        case "parsererror":
                            t.code = r.faultCodes.PARSE_ERROR, t.message = "SERVICE_PARSE_JSON";
                            break;
                        case "timeout":
                            t.code = r.faultCodes.HTTP_TIMEOUT, t.message = "SERVICE_REQUEST_TIMEOUT";
                            break;
                        case "error":
                        case "notmodified":
                        default:
                            t.code = r.faultCodes.HTTP_ERROR, t.message = "SERVICE_HTTP_ERROR"
                        }
                        l(t, n)
                    }
                };
                var b = JSON.stringify({
                    id: d,
                    url: h,
                    data: f
                });
                if (v) try {
                    v.postMessage(b, "https://" + e.location.host)
                } catch (w) {
                    console.error("https proxy error: ", w.message)
                } else y.push(b);
                return
            }
            $.ajax(_.extend({}, this.options, {
                contentType: "text/plain",
                dataType: "json",
                type: "POST",
                data: JSON.stringify(f),
                cache: i,
                url: h,
                success: function (e, t, r) {
                    a(e, n)
                },
                error: function (e, t, i) {
                    var s = {};
                    switch (t) {
                    case "parsererror":
                        s.code = r.faultCodes.PARSE_ERROR, s.message = "SERVICE_PARSE_JSON";
                        break;
                    case "timeout":
                        s.code = r.faultCodes.HTTP_TIMEOUT, s.message = "SERVICE_REQUEST_TIMEOUT";
                        break;
                    case "error":
                    case "notmodified":
                    default:
                        s.code = r.faultCodes.HTTP_ERROR, s.message = "SERVICE_HTTP_ERROR"
                    }
                    l(s, n)
                }
            }))
        } else this.isPending = !1, r.callsPendingToken.push(this), c()
    }, s.prototype.retry = function (e) {
        var t = this;
        this.isPending = !1, this.numRetries++, _.wait(e).then(function () {
            t.send()
        })
    }, s.prototype.queue = function (e) {
        s.prototype.queues || (s.prototype.queues = {});
        var t = s.prototype.queues[e];
        t || (t = s.prototype.queues[e] = new i), t.queue(this)
    }, e.Backbone.sync = function (e, t, n) {
        n = n || {};
        var r, i, o = t.url(e);
        if (!o) throw new Error("No endpoint for '" + e + "' method defined in the model");
        return t && (e == "create" || e == "update") && _.extend(n.parameters, t.toJSON()), n.useHTTPS && ($.ajaxSettings.beforeSend = function (e) {
            e.withCredentials = !0
        }), r = s.createRequest(!1, o, n.parameters || {}, {}, n.useHTTPS || !1, !1), i = r.promise(), i.then(n.success, n.error), r.send(), i
    }, GS.config && GS.config.sessionID && (r.sessionID = GS.config.sessionID), GS.config && GS.config.country && (r.country = GS.config.country);
    if (e.XDomainRequest) {
        var v, m = 1,
            g = {}, y = [];
        e.addEventListener("message", function (t) {
            if (t.origin != "https://" + e.location.host) return;
            try {
                var n = JSON.parse(t.data);
                if (n.id === 0 && n.data == "loaded") {
                    v = t.source;
                    for (var r = 0, i = y.length; r < i; r++) v.postMessage(y[r], "https://" + e.location.host);
                    y = []
                } else n.id && g[n.id] && (g[n.id](n), delete g[n.id])
            } catch (s) {
                console.error("cannot read JSON data from https proxy: ", s.data)
            }
        }, !1);
        var b = document.createElement("iframe");
        b.src = "https://" + e.location.host + "/httpsProxy.html", b.style.height = "300px", b.style.position = "absolute", b.style.left = "-400px", b.style.width = "200px", document.body.appendChild(b)
    }
}(this),
function (e, t) {
    function r(e, t) {
        var n = /\:/g,
            r = /\\/g;
        return t = t.replace(r, "\\\\").replace(n, "\\:"), e + ":" + t
    }

    function i(e) {
        var t = ["html5", e[0]],
            n;
        for (n in e[1]) t.push(r(n, e[1][n]));
        for (n in e[2]) t.push(r(n, e[2][n]));
        return t.push(e[3]), t.join("	")
    }
    var n = function (e) {
        return this.intialize(e), this
    };
    _.extend(n.prototype, Backbone.Events, {
        intialize: function (e) {
            this.enabled = !GS.h.isProduction() || Math.random() < .1, this.verbose = !GS.h.isProduction(), this.options = e || {}, this._log = [], this._context = {}
        },
        newItem: function (e, n) {
            var r = [e, {}, {}, (new Date).getTime()],
                i;
            n = n || {};
            for (i in n) n[i] !== t && (n[i].toString() != "[object Object]" ? r[1][i] = n[i] + "" : console.error("guts: can not use object as log value", e, i));
            for (i in this._context) this._context[i] && (r[2][i] = this._context[i]);
            return r
        },
        log: function (e, t) {
            return this.enabled ? (this._log.push(this.newItem(e, t)), this.verbose && console.log("guts: added", i(this._log[this._log.length - 1])), this.check()) : this
        },
        begin: function (e) {
            if (!this.enabled) return this;
            for (var t in e) e[t].toString() != "[object Object]" ? (this._context[t] = e[t] + "", this.verbose && console.log("guts: begin", t, this._context[t])) : console.error("guts: can not use object as context value", t, e);
            return this.check()
        },
        end: function () {
            if (!this.enabled) return this;
            var e = [].slice.call(arguments),
                t;
            while ( !! (t = e.shift()) && this._context.hasOwnProperty(t)) this.verbose && console.log("guts: end", t), delete this._context[t];
            return this.check()
        },
        check: function (e) {
            if (!this._log.length) return this;
            var t = (new Date).getTime(),
                n = this._log[this._log.length - 1][3];
            return this._ts || (this._ts = t), this._log.length > 30 ? this.send() : (t - this._ts) / 1e3 > 20 ? this.send() : (t - n) / 1e3 > 120 && this.send(), this
        },
        send: function () {
            this._ts = (new Date).getTime();
            var e = this._log.length,
                t = [this._ts].concat(this._log.map(i)).join("\n");
            this.verbose && console.log("guts: payload %s items\n%s", e, t), this._log = [], $.ajax({
                type: "POST",
                contentType: "text/html",
                data: t,
                url: this.options.endpoint,
                context: this,
                success: function () {
                    console.log("guts: sent ", e, "items at", this._ts)
                },
                error: function (e, t, n) {
                    console.error("guts: sending error", arguments)
                }
            })
        }
    }), e.GS.guts = new n({
        endpoint: "/guts.php"
    }), GS.guts.begin({
        initTime: (new Date).getTime(),
        sessionID: GS.config.sessionID
    }).log("init", {
        os: GS.h.os[0],
        osVersion: GS.h.os[1],
        browser: GS.h.browser[0],
        browserVersion: GS.h.browser[1],
        ip: GS.config.IP,
        locale: GS.config.lang
    })
}(this),
function (e, t) {
    var n = Backbone.Model.extend({
        url: function (e) {
            return {
                read: "userForgotPassword"
            }[e]
        },
        parse: function (e, t) {
            this.trigger(e ? "success" : "fail")
        }
    });
    e.GS.models.restorePass = new n;
    var r = Backbone.Model.extend({
        url: function (e) {
            return {
                read: "getIsUsernameEmailAvailable"
            }[e]
        },
        parse: function (e) {
            return this.trigger("checked", e, this), e
        }
    });
    e.GS.models.checkUser = new r
}(this),
function (e, t) {
    function s(t, n) {
        GS.config.runMode !== "production" && (t = "staging." + t);
        var r = "http://" + t + "/stream.php?streamKey=" + n;
        return e.XDomainRequest && (r = r.replace(".php", ".mp3")), r
    }
    var n = Backbone.Model.extend({
        idAttribute: "SongID",
        set: function (e, t) {
            t = t || {};
            var r = e;
            r.SongID && (r.SongID = parseInt(r.SongID, 10));
            if (r.CoverArtFilename) {
                var i = r.CoverArtFilename.match(/\/s(.+\..+)$/);
                i && i[1] && (r.CoverArtFilename = i[1])
            }
            if (!r.CoverArtFilename || r.CoverArtFilename === "default.png") r.CoverArtFilename = "album.png";
            if (r.Name || r.SongName) r.name = r.Name || r.SongName;
            return r.Token && (r.token = r.token || r.Token, delete r.Token), this.attributes.picURL || (GS.h.isRetina() ? r.picURL = n.picHD + r.CoverArtFilename : r.picURL = n.picSD + r.CoverArtFilename), this.attributes.coverURL500 || (r.coverURL500 = n.pic500 + r.CoverArtFilename), r.TSAdded && (r.TSAdded = Date.parse(r.TSAdded)), r.TSFavorited && (r.TSFavorited = Date.parse(r.TSFavorited)), r.TrackNum && (r.TrackNum = parseInt(r.TrackNum, 10)), r.ArtistID && (r.ArtistID = parseInt(r.ArtistID, 10)), r.AlbumID && (r.AlbumID = parseInt(r.AlbumID, 10)), Backbone.Model.prototype.set.call(this, r, t)
        },
        strippedJSON: function () {
            var e = this.toJSON();
            return delete e.picURL, delete e.coverURL500, delete e.EstimateDuration, delete e.Flags, delete e.IsLowBitrateAvailable, delete e.Weight, delete e.NumPlays, delete e.Popularity, delete e.Year, GS.h.lowerCase(e)
        },
        isFavorited: function () {
            return GS.models.session.isFavorited(this)
        },
        isAdded: function () {
            return GS.models.session.isAdded(this)
        },
        stream: function () {
            return this._stream || (this._stream = new o({
                song: this
            })), this._stream
        }
    }, {
        picSD: "http://images.gs-cdn.net/static/albums/40_",
        picHD: "http://images.gs-cdn.net/static/albums/80_",
        pic500: "http://images.gs-cdn.net/static/albums/500_"
    }),
        r = n.extend({
            url: function () {
                return "getSongFromToken"
            }
        }),
        i = Backbone.Collection.extend({
            model: n,
            initialize: function (e, t) {
                t = t || {}, t.sortBy = t.sortBy || "default", this.comparator = i.comparators[t.sortBy], this._sorted = {
                    field: t.sortBy,
                    reverse: !1
                }
            },
            sortBy: function (e) {
                var t, n;
                if (this._sorted && e === this._sorted.field) t = this.models.reverse(), this._sorted.reverse = !this._sorted.reverse;
                else {
                    n = i.comparators[e];
                    if (typeof n == "undefined") throw new Error("Collection doesn't know how to sort itself with '" + e + "'");
                    typeof n == "function" ? t = Backbone.Collection.prototype.sortBy.call(this, n) : t = this.models, this._sorted = {
                        field: e,
                        reverse: !1
                    }
                }
                return this.models = t, this
            }
        }, {
            comparators: {
                age: function (e) {
                    var t = e.attributes.TSAdded || e.attributes.TSFavorited;
                    return (new Date).getTime() - t
                },
                song: function (e) {
                    return e.attributes.Name
                },
                artist: function (e) {
                    return e.attributes.ArtistName
                },
                track: function (e) {
                    return e.attributes.TrackNum
                },
                album: function (e) {
                    return e.attributes.AlbumName
                },
                "default": !1
            }
        });
    _.extend(i.prototype, GS.models._Loaded);
    var o = Backbone.Model.extend({
        initialize: function (e) {
            if (!e.song) throw new Error("No idea how to stream song w/o a song.");
            this.song = e.song, this.id = this.song.id
        },
        url: function (e) {
            return {
                read: "getStreamKeyFromSongIDEx",
                downloaded: "markSongDownloadedEx",
                "30sec": "markStreamKeyOver30Seconds",
                played: "markSongQueueSongPlayed",
                completed: "markSongComplete"
            }[e]
        },
        fetch: function (e) {
            return e = e || {}, e.parameters = {
                prefetch: !1,
                mobile: !0,
                songID: this.idBa
            }, Backbone.Model.prototype.fetch.call(this, e)
        },
        mark: function (e) {
            e = e || {}, e.parameters = {
                streamKey: this.get("streamKey"),
                streamServerID: this.get("streamServerID"),
                songID: this.id
            }, e.method === "played" && _.extend(e.parameters, {
                songQueueID: 0,
                songQueueSongID: 0
            });
            if (e.method === "30sec") {
                var t = this;
                e.success = function (e, n, r) {
                    var i = e.tags;
                    if (!i || !i.length) return !1;
                    t.song.set({
                        tags: i
                    }), GS.h.latestTag(i[0].tid)
                }
            }
            return e.method === "completed" && _.extend(e.parameters, {
                song: {
                    songID: this.song.get("SongID"),
                    songName: this.song.get("name"),
                    albumID: this.song.get("AlbumID"),
                    albumName: this.song.get("AlbumName"),
                    artistID: this.song.get("ArtistID"),
                    artistName: this.song.get("ArtistName"),
                    artFilename: this.song.get("CoverArtFilename"),
                    track: this.song.get("TrackNum"),
                    privacy: GS.models.session.get("privacy") ? 1 : 0,
                    token: this.get("FileToken")
                }
            }), Backbone.sync.call(this, e.method, this, e)
        },
        parse: function (e, t) {
            return !e || e && e.length === 0 ? (this.trigger("error", this, e, t), !1) : (e.url = s(e.ip, e.streamKey), e)
        }
    });
    e.GS.models.Song = n, e.GS.models.Token = r, e.GS.models.Songs = i
}(this),
function (e, t) {
    var n = Backbone.Model.extend({
        idAttribute: "AlbumID",
        initialize: function () {
            this.songs = new GS.models.Songs([], {
                sortBy: "track"
            })
        },
        set: function (e, t) {
            e.CoverArtFilename || (e.CoverArtFilename = e.AlbumID + ".jpg"), GS.h.isRetina() ? e.picURL = n.picHD + e.CoverArtFilename : e.picURL = n.picSD + e.CoverArtFilename;
            if (e.Name || e.AlbumName) e.name = e.Name || e.AlbumName;
            var r = _.str.slugify(e.name) || "~";
            return e.baseURL = "/album/" + r + "/" + e.AlbumID, Backbone.Model.prototype.set.call(this, e, t)
        },
        url: function (e) {
            return {
                load: "albumGetAllSongs",
                read: "getAlbumByID"
            }[e]
        },
        fetch: function (e) {
            return e = e || {}, e.parameters = e.parameters || {}, _.extend(e.parameters, {
                albumID: this.id
            }), this.songs.length === 0 && this.load(), Backbone.Model.prototype.fetch.call(this, e)
        },
        load: function () {
            var e = this;
            return (this.sync || Backbone.sync).call(this, "load", this, {
                parameters: {
                    albumID: this.id
                },
                success: function (t, n, r) {
                    e.songs.reset(e.parse(t))
                },
                error: function () {
                    e.trigger("error")
                }
            })
        }
    }, {
        picSD: "http://images.gs-cdn.net/static/albums/80_",
        picHD: "http://images.gs-cdn.net/static/albums/120_"
    });
    e.GS.models.Album = n;
    var r = Backbone.Collection.extend({
        model: GS.models.Album
    });
    e.GS.models.Albums = r
}(this),
function (e, t) {
    var n = Backbone.Model.extend({
        idAttribute: "PlaylistID",
        initialize: function () {
            this.songs = new GS.models.Songs([], {
                sortBy: "default"
            })
        },
        set: function (e, t) {
            e.Picture || (e.Picture = "playlist.png"), GS.h.isRetina() ? e.picURL = n.picHD + e.Picture : e.picURL = n.picHD + e.Picture;
            var r = _.str.slugify(e.Name) || "~";
            return e.baseURL = "/playlist/" + r + "/" + e.PlaylistID, Backbone.Model.prototype.set.call(this, e, t)
        },
        url: function (e) {
            return {
                read: "getPlaylistByID"
            }[e]
        },
        fetch: function (e) {
            return e = e || {}, e.parameters = e.parameters || {}, _.extend(e.parameters, {
                playlistID: this.id
            }), Backbone.Model.prototype.fetch.call(this, e)
        },
        parse: function (e) {
            return e.Songs && this.songs.reset(e.Songs), e
        }
    }, {
        picHD: "http://images.gs-cdn.net/static/playlists/70_"
    });
    e.GS.models.Playlist = n;
    var r = Backbone.Collection.extend({
        model: GS.models.Playlist,
        comparator: function (e) {
            return e.get("Name")[0].toLowerCase()
        }
    });
    e.GS.models.Playlists = r
}(this),
function (e, t) {
    var n = GS.models.Songs.extend({
        initialize: function (e, t) {
            t = t || {};
            if (!t.userID) throw new Error("Can not create Library w/o user id.");
            this.userID = parseInt(t.userID, 10), t.sortBy = "age", GS.models.Songs.prototype.initialize.call(this, e, t)
        },
        url: function (e) {
            return {
                read: "userGetSongsInLibrary",
                add: "userAddSongsToLibrary",
                remove: "userRemoveSongsFromLibrary"
            }[e]
        },
        fetch: function (e) {
            return e = e || {}, e.parameters = e.parameters || {}, _.extend(e.parameters, {
                userID: this.userID,
                page: 0
            }), GS.models.Songs.prototype.fetch.call(this, e)
        },
        parse: function (e) {
            return e.Songs
        },
        addSong: function (e, t) {
            var n = this;
            t = t || {}, t.parameters = t.parameters || {}, t.method = "add", _.extend(t.parameters, {
                songs: [e.strippedJSON()]
            });
            var r = t.success;
            return t.success = function () {
                e = e.toJSON(), e.TSAdded = ~~ ((new Date).getTime() / 1e3), n.add(e), r && r(!0), GS.guts.log("songAddedToLibrary", {
                    ids: [e.SongID]
                })
            }, Backbone.sync.call(this, t.method, this, t)
        },
        removeSong: function (e, t) {
            var n = this;
            t = t || {}, t.parameters = t.parameters || {}, t.method = "remove", _.extend(t.parameters, {
                userID: GS.models.session.id,
                songIDs: [e.id],
                albumIDs: [e.get("AlbumID")],
                artistIDs: [e.get("ArtistID")]
            });
            var r = t.success;
            return t.success = function () {
                n.remove(e), r && r(!1), GS.guts.log("songRemovedFromLibrary", {
                    ids: [e.SongID]
                })
            }, Backbone.sync.call(this, t.method, this, t)
        },
        isYou: function () {
            return GS.models.session.isYou(this.userID)
        }
    });
    e.GS.models.Library = n;
    var r = GS.models.Songs.extend({
        initialize: function (e, t) {
            t = t || {};
            if (!t.userID) throw new Error("Can not create Favorites w/o user id.");
            this.userID = parseInt(t.userID, 10), t.sortBy = "age", GS.models.Songs.prototype.initialize.call(this, e, t)
        },
        url: function (e) {
            return {
                read: "getFavorites",
                add: "favorite",
                remove: "unfavorite"
            }[e]
        },
        fetch: function (e) {
            return e = e || {}, e.parameters = e.parameters || {}, _.extend(e.parameters, {
                userID: this.userID,
                ofWhat: "Songs"
            }), GS.models.Songs.prototype.fetch.call(this, e)
        },
        addSong: function (e, t) {
            var n = this;
            t = t || {}, t.parameters = t.parameters || {}, t.method = "add", _.extend(t.parameters, {
                what: "Song",
                ID: e.id,
                details: e.strippedJSON()
            });
            var r = t.success;
            return t.success = function () {
                e = e.toJSON(), e.TSFavorited = ~~ ((new Date).getTime() / 1e3), n.add(e), r && r(!0), GS.guts.log("objectFavorited", {
                    type: "song",
                    id: e.SongID
                })
            }, Backbone.sync.call(this, t.method, this, t)
        },
        removeSong: function (e, t) {
            var n = this;
            t = t || {}, t.parameters = t.parameters || {}, t.method = "remove", _.extend(t.parameters, {
                what: "Song",
                ID: e.id
            });
            var r = t.success;
            return t.success = function () {
                n.remove(e), r && r(!1), GS.guts.log("objectUnfavorited", {
                    type: "song",
                    id: e.SongID
                })
            }, Backbone.sync.call(this, t.method, this, t)
        },
        isYou: function () {
            return GS.models.session.isYou(this.userID)
        }
    });
    e.GS.models.Favorites = r;
    var i = GS.models.Playlists.extend({
        initialize: function (e, t) {
            t = t || {};
            if (!t.userID) throw new Error("Can not fetch user playlists w/o user id");
            this.userID = parseInt(t.userID, 10)
        },
        url: function (e) {
            return "userGetPlaylists"
        },
        fetch: function (e) {
            return e = e || {}, e.parameters = e.parameters || {}, _.extend(e.parameters, {
                userID: this.userID
            }), Backbone.Collection.prototype.fetch.call(this, e)
        },
        parse: function (e) {
            return e.Playlists
        },
        loaded: function () {
            return this.length > 0
        },
        isYou: function () {
            return GS.models.session.isYou(this.userID)
        }
    });
    e.GS.models.UserPlaylists = i;
    var s = Backbone.Model.extend({
        idAttribute: "userID",
        set: function (e, t) {
            if (!e) return !1;
            var n = GS.h.lowerCase(e);
            n.privacy ? n.privacy = Boolean(parseInt(n.privacy, 10)) : n.privacy = !1;
            if (!this.attributes.picture) {
                var r = n.picture || "user.png";
                GS.h.isRetina() ? n.picURL = s.picHD + r : n.picURL = s.picSD + r
            }
            n.isPremium && (n.isPremium = parseInt(n.isPremium, 10) === 1);
            var i = _.str.slugify(n.fName) || "~";
            return n.baseURL = "/user/" + i + "/" + n.userID, Backbone.Model.prototype.set.call(this, n, t)
        },
        getGender: function () {
            return this.get("sex") ? this.get("sex") == "M" ? "male" : "female" : !1
        },
        getAge: function () {
            if (!this.get("tSDOB")) return !1;
            var e = (new Date(this.get("tSDOB"))).getFullYear();
            return (new Date).getFullYear() - e
        }
    }, {
        picSD: "http://images.gs-cdn.net/static/users/40_",
        picHD: "http://images.gs-cdn.net/static/users/80_"
    }),
        o = Backbone.Collection.extend({
            model: s,
            initialize: function (e, t) {
                if (!t.userID) throw new Error("No idea how to load users following w/o user id");
                this.userID = t.userID
            },
            url: function () {
                return "getFavorites"
            },
            fetch: function (e) {
                return e = e || {}, e.parameters = e.parameters || {}, _.extend(e.parameters, {
                    userID: this.userID,
                    ofWhat: "Users"
                }), Backbone.Collection.prototype.fetch.call(this, e)
            },
            loaded: function () {
                return this.length > 0
            },
            isYou: function (e) {
                return GS.models.session.isYou(this.userID)
            }
        });
    e.GS.models.Following = o;
    var u = s.extend({
        initialize: function () {
            this.id && this.createCollections()
        },
        createCollections: function () {
            this.library = new GS.models.Library([], {
                userID: this.id
            }), this.favorites = new GS.models.Favorites([], {
                userID: this.id
            }), this.library.bind("reset", this._gotCollections, this), this.favorites.bind("reset", this._gotCollections, this), this.playlists = new GS.models.UserPlaylists([], {
                userID: this.id
            }), this.following = new GS.models.Following([], {
                userID: this.id
            })
        },
        _gotCollections: _.after(2, function () {
            this.trigger("collections:ready")
        }),
        collections: ["favorites", "library", "playlists", "following"],
        bindCollections: function (e, t, n) {
            _.forEach(this.collections, function (r) {
                this[r].bind(e, _.bind(t, n, r), n)
            }, this)
        },
        unbindCollections: function (e, t) {
            _.forEach(this.collections, function (t) {
                this[t] && this[t].unbind(e)
            }, this)
        },
        url: function (e) {
            return {
                read: "getUserByID",
                "delete": "logoutUser",
                authenticate: "authenticateUser",
                register: "registerUser"
            }[e]
        },
        sync: function (e, t, n) {
            return n = n || {}, n.parameters = n.parameters || {}, n.useHTTPS = n.useHTTPS || e === "create", this.id && _.extend(n.parameters, {
                userID: this.id
            }), Backbone.sync.call(this, e, this, n)
        },
        parse: function (e, t) {
            return e.errorCode ? (this.trigger("error", e), !1) : e.User ? e.User : e.userID ? e : (this.trigger("error", e), !1)
        },
        isPremium: function () {
            return this.get("isPremium")
        },
        fetchOther: function () {
            this.playlists.loaded() || this.playlists.fetch(), this.following.loaded() || this.following.fetch()
        },
        fetchMusic: function () {
            this.favorites.loaded() || this.favorites.fetch(), this.library.loaded() || this.library.fetch()
        }
    });
    e.GS.models.User = u;
    var a = u.extend({
        initialize: function (e, t) {
            this.constructor.__super__.initialize.apply(this, arguments), this.bind("change", function () {
                this.id && (this.createCollections(), this.fetchMusic(), this.trigger("log:in"), GS.guts.begin({
                    userID: this.id
                }).log("login", {
                    userID: this.id
                }))
            }, this), this.bind("destroy", function () {
                this.clear({
                    silent: !0
                }), delete this.id, this.unbindCollections(), this.library.unbind("reset"), delete this.library, this.favorites.unbind("reset"), delete this.favorites, this.following.unbind("reset"), delete this.following, this.playlists.unbind("reset"), delete this.playlists, this.trigger("log:out"), GS.guts.log("logout").end("userID"), GS.h.navigate("/")
            }, this), this.authenticated() && (this.fetchMusic(), GS.guts.begin({
                userID: this.id
            }))
        },
        register: function (e) {
            e = e || {}, e.parameters = e.parameters || {};
            var t = this,
                n = e.success;
            return e.useHTTPS = !0, e.success = function (n, r, i) {
                if (!t.set(t.parse(n, i), e)) return !1;
                GS.guts.log("signupSuccess"), GS.h.navigate(t.get("baseURL"))
            }, this.sync("register", this, e)
        },
        authenticate: function (e) {
            e = e || {}, e.parameters = e.parameters || {};
            var t = this,
                n = e.success;
            return e.useHTTPS = !0, e.success = function (n, r, i) {
                if (!t.set(t.parse(n, i), e)) return !1;
                GS.h.navigate(t.get("baseURL"))
            }, this.sync("authenticate", this, e)
        },
        isYou: function (e) {
            return e = parseInt(e, 10), e === this.id
        },
        authenticated: function () {
            return !!this.id
        },
        isFavorited: function (e) {
            if (!e) throw new Error("Can't tell if favorited w/o song");
            return this.authenticated() && this.favorites.length ? !! this.favorites.get(e) : !1
        },
        isAdded: function (e) {
            if (!e) throw new Error("Can't tell if added to library w/o song");
            return this.authenticated() && this.library.length ? !! this.library.get(e) : !1
        },
        favorite: function (e, t) {
            var n = this.isFavorited(e);
            n ? this.favorites.removeSong(e, {
                success: t[0]
            }) : (this.favorites.addSong(e, {
                success: t[0]
            }), this.isAdded(e) || this.library.addSong(e, {
                success: t[1]
            }))
        },
        add: function (e, t) {
            var n = this.isAdded(e);
            n ? (this.library.removeSong(e, {
                success: t[1]
            }), this.isFavorited(e) && this.favorites.removeSong(e, {
                success: t[0]
            })) : this.library.addSong(e, {
                success: t[1]
            })
        }
    });
    e.GS.models.session = new a(GS.config.user)
}(this),
function (e, t) {
    var n = Backbone.Model.extend({
        url: function (e) {
            return {
                read: "getAutoplaySong",
                start: "startAutoplayTag"
            }[e]
        },
        start: function () {
            this.stop({
                silent: !0
            }), this.bind("change", this.gotSong, this), GS.models.queue.reset(), GS.models.queue.bind("last", this.fetch, this), GS.models.queue.bind("reset", this.stop, this), this.collection.playing(this), this.fetch(), this.fetch()
        },
        stop: function (e) {
            e = e || {}, this.unbind("change", this.gotSong), GS.models.queue.unbind("last", this.fetch), GS.models.queue.unbind("reset", this.stop), this.collection.playing(null), e.silent || this.trigger("stopped")
        },
        fetch: function (e) {
            return e = e || {}, this.nextSong ? e.parameters = {
                autoplayState: this.toJSON()
            } : e.parameters = {
                tagID: this.id
            }, Backbone.Model.prototype.fetch.call(this, e)
        },
        sync: function (e, t, n) {
            return this.nextSong || (e = "start"), Backbone.sync.call(this, e, this, n)
        },
        gotSong: function () {
            GS.models.queue.length === 0 ? (GS.models.queue.playNow(this.nextSong), GS.audio.playNow(), this.trigger("readytoplay")) : GS.models.queue.addLast(this.nextSong)
        },
        parse: function (e, t) {
            return e ? (this.nextSong = new GS.models.Song(e.nextSong), e.autoplayState) : (this.trigger("error", this, e, t), !1)
        }
    }),
        r = Backbone.Collection.extend({
            model: n,
            playing: function (e) {
                return typeof e != "undefined" && (this._active = e), this._active || !1
            },
            byName: function () {
                var e = {};
                return this.forEach(function (t) {
                    e[t.get("title").toLowerCase()] = t.id
                }), e
            },
            getPopular: function () {
                var e = this.byName();
                return _(["rock", "indie", "electronica", "rap", "pop"]).map(function (t) {
                    return this.get(e[t])
                }, this).filter(function (e) {
                    return Boolean(e)
                })
            }
        }),
        i = new r([{
            id: 136,
            title: "Indie",
            locale: "ST_INDIE"
        }, {
            id: 67,
            title: "Electronica",
            locale: "ST_ELECTRONICA"
        }, {
            id: 750,
            title: "Classical",
            locale: "ST_CLASSICAL"
        }, {
            id: 56,
            title: "Pop",
            locale: "ST_POP"
        }, {
            id: 3,
            title: "Rap",
            locale: "ST_RAP"
        }, {
            id: 80,
            title: "Country",
            locale: "ST_COUNTRY"
        }, {
            id: 13,
            title: "Alternative",
            locale: "ST_ALTERNATIVE"
        }, {
            id: 29,
            title: "Hip Hop",
            locale: "ST_HIP_HOP"
        }, {
            id: 3529,
            title: "Classic Rock",
            locale: "ST_CLASSIC_ROCK"
        }, {
            id: 75,
            title: "Ambient",
            locale: "ST_AMBIENT"
        }, {
            id: 111,
            title: "Punk",
            locale: "ST_PUNK"
        }, {
            id: 9,
            title: "90's Alt Rock",
            locale: "ST_90S_ALT_ROCK"
        }, {
            id: 230,
            title: "Blues",
            locale: "ST_BLUES"
        }, {
            id: 12,
            title: "Rock",
            locale: "ST_ROCK"
        }, {
            id: 43,
            title: "Jazz",
            locale: "ST_JAZZ"
        }, {
            id: 4,
            title: "R&B",
            locale: "ST_RNB"
        }, {
            id: 122,
            title: "Folk",
            locale: "ST_FOLK"
        }, {
            id: 2563,
            title: "Dubstep",
            locale: "ST_DUBSTEP"
        }, {
            id: 55,
            title: "80's",
            locale: "ST_80S"
        }, {
            id: 69,
            title: "Trance",
            locale: "ST_TRANCE"
        }, {
            id: 96,
            title: "Bluegrass",
            locale: "ST_BLUEGRASS"
        }, {
            id: 160,
            title: "Reggae",
            locale: "ST_REGGAE"
        }, {
            id: 17,
            title: "Metal",
            locale: "ST_METAL"
        }, {
            id: 102,
            title: "Oldies",
            locale: "ST_OLDIES"
        }, {
            id: 191,
            title: "Experimental",
            locale: "ST_EXPERIMENTAL"
        }, {
            id: 528,
            title: "Latin",
            locale: "ST_LATIN"
        }]);
    e.GS.models.stations = i
}(this),
function (e, t) {
    var n = GS.models.Songs.extend({
        initialize: function (e, t) {
            t = t || {}, GS.models.Songs.prototype.initialize.call(this, e, t)
        },
        url: function () {
            return "popularGetSongs"
        },
        parse: function (e) {
            return e.Songs
        }
    });
    e.GS.models.popular = new n
}(this),
function (e, t) {
    var n = Backbone.Model.extend({
        url: function () {
            return "getResultsFromSearch"
        },
        initialize: function (e, t) {
            this.options = this.options || {}, this.query = t.query, this.only = t.by || !1;
            if (!this.only) this.songs = new GS.models.Songs, this.playlists = new GS.models.Playlists, this.albums = new GS.models.Albums;
            else switch (this.only) {
            case "songs":
                this.songs = new GS.models.Songs;
                break;
            case "playlists":
                this.playlists = new GS.models.Playlists;
                break;
            case "albums":
                this.albums = new GS.models.Albums
            }
            this.bind("change", function (e, t) {
                GS.guts.begin({
                    mostRecentSearch: this.query,
                    mostRecentSearchType: t.parameters.type.join("/"),
                    mostRecentSearchVersion: this.get("assignedVersion")
                }).log("search", {
                    type: t.parameters.type.join("/"),
                    searchString: this.query,
                    searchVersion: this.get("assignedVersion")
                })
            })
        },
        fetch: function (e) {
            e = e || {}, e.parameters = e.parameters || {};
            var t = ["Songs", "Playlists", "Albums"];
            this.only && (t = [this.only.replace(/^./, function (e) {
                return e.toUpperCase()
            })]), _.extend(e.parameters, {
                query: this.query,
                type: t,
                guts: 0,
                ppOverride: ""
            }), Backbone.Model.prototype.fetch.call(this, e)
        },
        parse: function (e) {
            var t = e.result || {};
            return t.Songs && (this.songs.reset(t.Songs), delete t.Songs), t.Playlists && (this.playlists.reset(t.Playlists), delete t.Playlists), t.Albums && (this.albums.reset(t.Albums), delete t.Albums), t
        },
        haveResults: function () {
            return this.only ? this[this.only].length : this.songs.length || this.albums.length || this.albums.length
        }
    });
    e.GS.models.Search = n
}(this),
function (e, t) {
    var n = Backbone.Model.extend({
        storageKey: "queue-state",
        initialize: function () {
            this.read(), this.bind("change", this.store)
        },
        toggle: function (e) {
            var t = this.get(e),
                n = {};
            n[e] = !t, this.set(n)
        }
    }),
        r = GS.models.Songs.extend({
            storageKey: "queue",
            initialize: function (e, t) {
                this.read(), this.preferences = t.preferences, this._current = null, this.reshuffle(), this.bind("reset", function () {
                    this._current = null, this.reshuffle()
                }), this.bind("reset", this.store), this.bind("remove", this.handleRemove), this.bind("remove", this.updateShuffle), this.bind("add", this.updateShuffle), this.bind("add", function (e, t, n) {
                    n.batch || this.trigger("batch:add", {
                        models: [e]
                    })
                }), this.preferences.bind("change:shuffle", function (e, t, n) {
                    t && this.reshuffle()
                }, this)
            },
            reshuffle: function (e, n, r) {
                var i = this._current !== null ? this.current().cid : t;
                this._shuffleCurrent = -1, this._shuffled = _.shuffle(this.toArray().map(function (e) {
                    return e.cid
                }).filter(function (e) {
                    return e !== i
                }))
            },
            shuffleFrom: function (e, t) {
                if (!this.preferences.get("shuffle")) return;
                t && this.reshuffle();
                var n = e.cid,
                    r = this._shuffled.indexOf(n);
                this._shuffled.splice(r, 1), this._shuffled.unshift(n), this._shuffleCurrent = 0
            },
            updateShuffle: function (e, t, n) {
                n = n || {};
                if (n.move || !this.preferences.get("shuffle")) return;
                if (this._shuffled.length === 0) {
                    this._shuffled.push(e.cid);
                    return
                }
                var r = _.indexOf(this._shuffled, e.cid);
                if (r === -1) {
                    var i = this._shuffleCurrent,
                        s = i + 1 + Math.round(Math.random() * (this.length - (i === -1 ? 0 : i)));
                    this._shuffled.splice(s, 0, e.cid)
                } else this._shuffled.splice(r, 1)
            },
            remove: function (e, t) {
                t = t || {}, t.index = this.indexOf(e), Backbone.Collection.prototype.remove.call(this, e, t)
            },
            handleRemove: function (e, t, n) {
                if (n.move) return;
                n.index === this._current ? this.moveTo(this._current === this.length ? this._current - 1 : this._current) : n.index < this._current ? this.moveTo(this._current - 1) : n.index === this.length && this.triggerLast()
            },
            moveTo: function (e) {
                e === -1 && (e = null), this._current = e, this._current === null && this.reshuffle(), this.trigger("move", {
                    song: this.current()
                }), this.triggerLast()
            },
            triggerLast: function () {
                this._current === this.length - 1 && this.trigger("last")
            },
            getNext: function () {
                var e = null;
                if (this.preferences.get("shuffle") && !GS.models.stations.playing()) {
                    var t;
                    if (this._shuffleCurrent < this._shuffled.length - 1) t = this._shuffled[++this._shuffleCurrent];
                    else {
                        if (!this.preferences.get("repeat")) return e;
                        this.reshuffle(), t = this._shuffled[++this._shuffleCurrent]
                    }
                    e = this.getByCid(t)
                } else if (this._current === null) e = this.at(0);
                else if (this._current < this.length - 1) e = this.at(this._current + 1);
                else if (this._current >= this.length - 1) {
                    if (!this.preferences.get("repeat")) return e;
                    e = this.at(0)
                }
                return e
            },
            next: function () {
                var e = this.getNext();
                return e ? (this._playExisting(e), !0) : (this.trigger("ended"), !1)
            },
            getPrev: function () {
                var e = null;
                if (this.preferences.get("shuffle") && !GS.models.stations.playing()) {
                    var t;
                    if (this._shuffleCurrent > 0) t = this._shuffled[--this._shuffleCurrent];
                    else {
                        if (!this.preferences.get("repeat")) return e;
                        this._shuffleCurrent = this._shuffled.length, t = this._shuffled[--this._shuffleCurrent]
                    }
                    e = this.getByCid(t)
                } else if (this._current === 0 || this._current === null) {
                    if (!this.preferences.get("repeat")) return e;
                    e = this.at(this.length - 1)
                } else this._current > 0 && (e = this.at(this._current - 1));
                return e
            },
            prev: function () {
                var e = this.getPrev();
                return e ? (this._playExisting(e), !0) : (this.trigger("ended"), !1)
            },
            playNow: function (e) {
                this.addNext(e);
                var t = e.length || 1;
                this._current !== null ? this._current += 1 : this._current = this.length - t, this._shuffleCurrent === -1 && this.shuffleFrom(this.current())
            },
            _playExisting: function (e) {
                this.moveTo(this.indexOf(e))
            },
            playExisting: function (e) {
                this.reshuffle(), this.shuffleFrom(e), this._playExisting(e)
            },
            addNext: function (e) {
                _.isArray(e) || (e = [e]);
                if (!e.length) return;
                GS.guts.log("songsQueued", {
                    songIDs: e.map(function (e) {
                        return e.id
                    }),
                    playOnAdd: !0
                });
                var t = this._current !== null ? this._current + 1 : this.length;
                for (var n = 0, r = e.length; n < r; n++) this.add(e[n].toJSON(), {
                    at: t + n,
                    batch: !0
                });
                this.trigger("batch:add", {
                    models: e
                }), this.store()
            },
            addLast: function (e) {
                this.add(e.toJSON()), this.store()
            },
            current: function () {
                return this.at(this._current)
            },
            moveUp: function (e) {
                var t = this.indexOf(e);
                this.remove(e, {
                    move: !0
                }), this.add(e, {
                    at: t - 1,
                    move: !0
                }), t === this._current ? this.moveTo(t - 1) : t - 1 === this._current && this.moveTo(this._current + 1)
            },
            moveDown: function (e) {
                var t = this.indexOf(e);
                this.remove(e, {
                    move: !0
                }), this.add(e, {
                    at: t + 1,
                    move: !0
                }), t === this._current ? this.moveTo(t + 1) : t + 1 === this._current && this.moveTo(this._current - 1)
            }
        });
    _.extend(r.prototype, GS.models._Storage), _.extend(n.prototype, GS.models._Storage), GS.models.queuePreferences = new n({
        repeat: !1,
        shuffle: !1
    }), GS.models.queue = new r(null, {
        preferences: GS.models.queuePreferences
    })
}(this),
function (e, t) {
    var n = function () {
        this.initialize()
    };
    _.extend(_.extend(n.prototype, Backbone.Events), {
        _needsActivated: !1,
        initialize: function () {
            this.errorReset();
            if ($.os.ios || $.os.android && parseInt($.os.version, 10) >= 4) this._needsActivated = !0;
            this.audio = document.createElement("audio"), this.audio.autoplay = !0, this.audio.preload = !0, this.audio.autobuffer = !1, this.audio.loop = !1, $.os.ios && this.audio.setAttribute("x-webkit-airplay", "allow"), this.el = $("#hide-audio"), this.el.append(this.audio), this.audio.addEventListener("canplay", _.bind(function (e) {
                this.trigger("player:durationchange")
            }, this)), this.audio.addEventListener("durationchange", _.bind(function () {
                this.trigger("player:durationchange")
            }, this)), this.audio.addEventListener("timeupdate", _.bind(this.timeUpdate, this)), this.audio.addEventListener("timeupdate", _.throttle(_.bind(function () {
                this.trigger("player:timeupdate", {
                    progress: this.getProgress(),
                    loaded: this.getLoaded()
                })
            }, this), 1e3)), this.audio.addEventListener("play", _.bind(function () {
                this.trigger("player:play")
            }, this)), this.audio.addEventListener("pause", _.bind(function () {
                this.trigger("player:pause")
            }, this)), $.os.ios || this.audio.addEventListener("ended", _.bind(function () {
                this.trigger("player:ended")
            }, this)), this.audio.addEventListener("error", _.bind(function () {
                this.trigger("player:error")
            }, this)), this.audio.addEventListener("stalled", _.bind(function (e) {
                GS.h.isAndroid2() && this.trigger("player:error")
            }, this)), this.bind("player:durationchange", this.durationChanged), this.bind("player:loaded", this.loaded), this.bind("player:30secpassed", function () {
                this.model && this.model.stream().mark({
                    method: "30sec"
                })
            }), this.bind("player:ended", this.ended), this.bind("player:error", this.error), GS.models.queue.bind("remove", function (e, t, n) {
                !n.move && this.getModel() === e && (GS.models.queue.length !== 0 ? (this.audio.pause(), this.playNow()) : this.stop())
            }, this), GS.models.queue.bind("reset", function (e, t) {
                e.length === 0 && this.stop()
            }, this);
            var e = {
                "30secpassed": "30SECPASSED",
                loaded: "LOADED",
                play: "PLAYING",
                pause: "PAUSED",
                ended: "COMPLETED",
                error: "FAILED"
            };
            this.bind("all", function (t, n) {
                t = e[t.split(":")[1]];
                if (!t) return;
                GS.guts.log("playStatusUpdate", {
                    playStatus: t,
                    activeSong: this.model && this.model.id
                })
            })
        },
        setModel: function (e) {
            this.model = e, this.trigger("player:set-model", {
                model: this.model
            })
        },
        getModel: function () {
            return this.model
        },
        getState: function () {
            var e = this.audio;
            return [e.networkState, e.readyState, e.currentTime, e.duration, this._errorsLeft]
        },
        error: function (e) {
            this.audio.error ? console.log(GS.h.readError(this.audio.error.code)) : e ? console.log(e) : console.log("Unknown <audio> error, state: " + this.getState().join()), this._errorsLeft--, this._errorsLeft <= 0 ? this.stop() : this.playNext()
        },
        errorReset: function () {
            this._errorsLeft = 5
        },
        stop: function () {
            this.audio.pause(), this.unbind("player:error", this.error), this.audio.removeAttribute("src"), this.bind("player:error", this.error), GS.models.queue.moveTo(-1), this.errorReset(), this.model && (this.model.stream().unbind("error"), this.model.stream().clear()), this.trigger("player:stopped")
        },
        playNow: function () {
            if (this._errorsLeft <= 0) {
                this.stop();
                return
            }
            this.mayHaveAd() && (this._adPromise = GS.ads.perSong.req());
            var e = GS.models.queue.current();
            if (!e) return;
            this.setModel(e), this.model.stream().clear().unbind("error").bind("error", function (e, t) {
                this.trigger("player:error", t ? t.message : !1)
            }, this), this.model.stream().fetch().done(_.bind(this.play, this)), this.activatePlayback()
        },
        activatePlayback: function () {
            this._needsActivated && (this.audio.play(), this._needsActivated = !1)
        },
        play: function (e) {
            this.trigger30secs = _.once(_.bind(this.trigger, this, "player:30secpassed")), this.triggerLoaded = _.once(_.bind(this.trigger, this, "player:loaded")), this.triggerError = _.once(_.bind(this.trigger, this, "player:error")), this.triggerEnded = _.once(_.bind(this.trigger, this, "player:ended")), e = _.isString(e) ? e : this.model.stream().get("url"), this.audio.setAttribute("src", e), $.os.ios || (this.audio.play(), GS.h.isAndroid2() && this.audio.load()), this.model && this.model.stream().mark({
                method: "downloaded"
            })
        },
        ended: function () {
            var e = this.audio;
            if (GS.h.isAndroid2() && e.duration === 6e3 || GS.h.isAndroid4() && e.currentTime === 1 && e.duration === 1) {
                this.trigger("player:error");
                return
            }
            this.model && this.model.stream().mark({
                method: "completed"
            });
            var t = this._adPromise;
            this._adPromise = null, GS.models.session.isPremium() || !t ? this.playNext() : (t.fail(_.bind(this.playNext, this)).done(_.bind(this.playAd, this)).done(GS.ads.perSong.show), !t.isRejected() && !t.isResolved() && t._reject("Ad hasn't been received yet when 1st song ended"))
        },
        playNext: function () {
            if (this._errorsLeft <= 0) {
                this.stop();
                return
            }
            GS.models.queue.next() ? this.playNow() : this.stop()
        },
        mayHaveAd: function () {
            var e = (new Date).getTime(),
                t, n = GS.h.read("ad:ts", !0) || -Infinity;
            return GS.config.runMode == "production" ? t = (e - n) / 1e3 > 7200 : t = !0, !! (!this._adPromise && this._adPromise !== null && !GS.models.session.isPremium() && t)
        },
        playAd: function (e) {
            this.model = !1, this.play(e.audio.src), this.duration = parseInt(e.time, 10), GS.h.write("ad:ts", (new Date).getTime(), !0)
        },
        loaded: function () {
            this.trigger("player:started", {
                model: this.model || !1
            });
            if (!this.model) return;
            this.errorReset(), GS.models.stations.playing() ? GS.tracking.trackEvent("audio", "radio_play") : GS.tracking.trackEvent("audio", "song_play")
        },
        pauseResume: function () {
            this.audio.paused ? this.audio.play() : this.audio.pause()
        },
        getProgress: function () {
            var e = this.audio.getAttribute("src") !== "";
            return e ? [this.audio.currentTime || 0, this.duration || 0] : [0, 0]
        },
        getLoaded: function () {
            var e, t = this.audio.getAttribute("src") !== "";
            return this.audio.buffered && this.audio.buffered.length >= 1 ? e = this.audio.buffered.end(0) : e = 0, t ? [e, this.duration || 0] : [0, 0]
        },
        durationChanged: function () {
            var e = this.audio.duration;
            !e || isNaN(e) ? this.model && (this.duration = ~~ (this.model.stream().get("uSecs") / 1e6)) : this.duration = e
        },
        timeUpdate: function () {
            var e = this.audio;
            e.currentTime > .5 && e.currentTime !== 1 ? this.triggerLoaded() : GS.h.isAndroid2() && e.currentTime === 0 && e.networkState == 2 && e.readyState === 0 && this.triggerError(), ~~e.currentTime > 30 && this.trigger30secs(), $.os.ios && e.ended && this.triggerEnded()
        }
    }), e.GS.audio = new n
}(this),
function (e, t) {
    var n = Backbone.Collection.extend({
        model: GS.models.Song,
        storageKey: "recent-songs",
        initialize: function () {
            this.read(), GS.audio.bind("player:started", this.update, this), this.seed(), GS.models.session.bind("log:in", this.reset, this), GS.models.session.bind("log:out", this.reset, this), this.bind("reset", this.store)
        },
        update: function (e) {
            e = e || {};
            if (!e.model) return;
            this.remove(this.at(0)).add(e.model.toJSON()), this.store()
        },
        add: function (e, t) {
            t = t || {};
            if (!t.silent) {
                _.isArray(e) || (e = [e]);
                var n = this.last();
                e = e.filter(function (e) {
                    return !n || n.id !== e.SongID
                })
            }
            return Backbone.Collection.prototype.add.call(this, e, t)
        },
        seed: function () {
            if (this.length === 7) return;
            var e = GS.models.queue,
                t = 0,
                n;
            while (this.length < 7 && t < e.length) n = e.at(t++), this.get(n.id) || this.add(n.toJSON());
            this.reset(_.shuffle(this.models), {
                silent: !0
            }), this.store()
        },
        getRecent: function () {
            return this.length > 3 && this.length < 7 ? this.first(this.length - 2) : this.length >= 7 ? this.first(5) : []
        }
    });
    _.extend(n.prototype, GS.models._Storage), GS.models.recent = new n
}(this),
function (e, t) {
    if (!$.os.android) return;
    var n = Backbone.View.prototype.delegateEvents,
        r = /^(\S+)\s*(.*)$/,
        i;
    _.extend(Backbone.View.prototype, {
        delegateEvents: function (e) {
            if (!e && !(e = this.events)) return;
            for (var t in e) {
                var i = t.match(r),
                    s = i[1],
                    o = i[2];
                if (o && s === "click") {
                    if (o == ".queue-song-row") continue;
                    e["touchstart " + o] = "_touchStart", e["touchend " + o] = "_touchEnd", e["touchcancel " + o] = "_touchCancel"
                }
            }
            n.apply(this, arguments)
        },
        _touchStart: function (e) {
            var t = $(e.currentTarget);
            t.addClass("_active"), i = _.delay(function () {
                t.removeClass("_active")
            }, 350)
        },
        _touchEnd: function (t) {
            i && e.clearTimeout(i), $(t.currentTarget).removeClass("_active")
        },
        _touchCancel: function (e) {
            $(e.currentTarget).removeClass("_active")
        }
    })
}(this),
function (e, t) {
    function n() {
        var e = $(this),
            t = e.attr("type");
        return this.nodeName.toLowerCase() != "fieldset" && !this.disabled && t != "submit" && t != "reset" && t != "button" && (t != "radio" && t != "checkbox" || this.checked)
    }
    $.fn.serializeArray = function () {
        var e = [],
            t;
        return $(Array.prototype.slice.call(this.get(0).elements)).each(function () {
            t = $(this), n.call(this) && e.push({
                name: t.attr("name"),
                value: t.val()
            })
        }), e
    }, $.fn.serializeHash = function () {
        var e = {}, t;
        return $(Array.prototype.slice.call(this.get(0).elements)).each(function () {
            t = $(this), n.call(this) && (e[t.attr("name")] = t.val())
        }), e
    }
}(this),
function (e, t) {
    var n = Backbone.View.extend({
        tagName: "ul",
        className: "list",
        templates: {},
        RowHeight: 59,
        initialize: function (e) {
            this.options.offset = this.options.offset || [0, 0];
            if (!this.templates.list) throw new Error("No idea how to render the List w/o list template");
            this.$el = $(this.el), this._rendered = 0, this.loadingEl = $(GS.h.getTemplate("shared/release_to_load.ejs")()), this.render(), GS.views.scroller.bind("scroller:scrolled-bottom", this.render, this)
        },
        getHeight: function () {
            var t = e.innerHeight - 44;
            return GS.models.queue.length && (t -= 45), GS.models.stations.playing() && (t -= 44), this.options.offset[0] && (t -= 90), this.options.offset[1] && (t -= 45), t
        },
        updateNextFew: function () {
            this._nextFew = Math.floor(this.getHeight() / this.RowHeight) + 1, this.options.renderAll && (this._nextFew = this.collection.length)
        },
        render: function () {
            if (GS.views.app._hidden) return;
            this.updateNextFew();
            var e = this._rendered + this._nextFew,
                t;
            e >= this.collection.length && (e = this.collection.length, this.loadingEl.addClass("hidden"), GS.views.scroller.unbind("scroller:scrolled-bottom", this.render)), _.isArray(this.collection) ? t = this.collection : t = this.collection.toArray();
            if (this._rendered >= e || t.length === 0) return;
            var n = document.createDocumentFragment();
            $(this.templates.list({
                models: t.slice(this._rendered, e)
            })).appendTo(n), this.renderAd(n), this.$el.append(n).append(this.loadingEl), this._rendered += this._nextFew, this.el.parentNode || this.options.$parent.append(this.el)
        },
        renderAd: function (e) {
            if (this.options.noAd || GS.models.session.isPremium()) return;
            var t = ~~ (this.getHeight() / this.RowHeight),
                n = _.filter(e.childNodes, function (e, t) {
                    return e.nodeType === 1
                }),
                r;
            this._rendered === 0 ? t <= n.length ? r = t - 1 : r = n.length - 1 : n.length < t ? r = n.length - 1 : r = 1, GS.ads.list.placeAd({
                node: n[r]
            })
        },
        removeRow: function (e) {
            e.remove()
        },
        destroy: function () {
            GS.views.scroller.unbind("scroller:scrolled-bottom", this.render), this.unbind(), this.remove()
        }
    }),
        r = n.extend({
            initialize: function (e) {
                _.extend(this.templates, {
                    list: GS.h.getTemplate("song_list/song_list.ejs")
                }), this.className += " song-list", this.menu = new GS.views.SongContextMenu({
                    parent: this
                }), GS.models.session.bind("collections:ready", this.markRows, this), GS.models.session.bind("destroy", this.unmarkRows, this), n.prototype.initialize.call(this, e)
            },
            destroy: function () {
                return this.menu.destroy(), GS.models.session.unbind("collections:ready", this.markRows), GS.models.session.unbind("destroy", this.unmarkRows), n.prototype.destroy.call(this)
            },
            events: {
                "click .song-row": "playNow",
                "click .context-menu-button": "toggleMenu"
            },
            toggleMenu: function (e) {
                var t = $(e.currentTarget),
                    n = t.parent(".song-row"),
                    r = n.data("song-id");
                r && this.menu.toggle({
                    row: n,
                    model: this.collection.get(r),
                    onShow: function () {
                        t.addClass("active")
                    },
                    onHide: function () {
                        t.removeClass("active")
                    }
                })
            },
            fav: function (e) {
                return e.addClass("is-faved"), this
            },
            unfav: function (e) {
                e.removeClass("is-faved"), this.collection === GS.models.session.favorites && this.removeRow(e)
            },
            add: function (e) {
                return e.addClass("is-added"), this
            },
            unadd: function (e) {
                e.removeClass("is-added"), this.collection === GS.models.session.library && this.removeRow(e)
            },
            markRows: function () {
                var e = this.$(".song-row"),
                    t;
                _.each(e, function (e, n) {
                    t = this.collection.models[n];
                    if (t.isFavorited()) {
                        e = $(e), this.fav(e).add(e);
                        return
                    }
                    t.isAdded() && this.add($(e))
                }, this)
            },
            unmarkRows: function () {
                var e = this.$(".song-row.is-faved");
                e.removeClass("is-faved"), e = this.$(".song-row.is-added"), e.removeClass("is-added")
            },
            playNow: function (e) {
                if ($(e.target).hasClass("context-menu-button")) return;
                var t = $(e.currentTarget),
                    n = t.data("song-id");
                n && (GS.models.queue.playNow(this.collection.get(n)), GS.audio.playNow(), GS.tracking.trackEvent("song_row", "play_now"))
            }
        }, {
            RowHeight: 50
        });
    e.GS.views.SongList = r;
    var i = n.extend({
        initialize: function (e) {
            _.extend(this.templates, {
                list: GS.h.getTemplate("albums/list.ejs")
            }), this.className += " albums-list", n.prototype.initialize.call(this, e)
        }
    });
    e.GS.views.AlbumList = i;
    var s = n.extend({
        initialize: function (e) {
            _.extend(this.templates, {
                list: GS.h.getTemplate("playlists/list.ejs")
            }), this.className += " playlists-list", n.prototype.initialize.call(this, e)
        }
    });
    e.GS.views.PlaylistList = s;
    var o = n.extend({
        initialize: function (e) {
            _.extend(this.templates, {
                list: GS.h.getTemplate("users/list.ejs")
            }), this.className += " users-list", n.prototype.initialize.call(this, e)
        }
    });
    e.GS.views.UserList = o;
    var u = Backbone.View.extend({
        tagName: "li",
        className: "list-row menu-row",
        initialize: function (e) {
            this.$el = $(this.el), this.render(), this.$el.delegate(".context-menu li", "click", _.bind(this.hide, this))
        },
        render: function () {
            this.$el.append(this.template())
        },
        toggle: function (e) {
            this._options ? this._options.row[0] === e.row[0] ? this.hide() : (this.hide(), this._options = e, this.show()) : (this._options = e, this.show())
        },
        show: function () {
            var e = this._options.row;
            e.after(this.el), this.beforeShow && this.beforeShow(), this.$el.addClass("shown"), this._options.onShow && this._options.onShow()
        },
        hide: function () {
            this.$el.removeClass("shown"), this.onHide && this.onHide(), this._options.onHide && this._options.onHide(), this._options = null
        },
        destroy: function () {
            this._options = null, this.unbind(), this.remove()
        }
    });
    e.GS.views.ContextMenu = u;
    var a = u.extend({
        template: GS.h.getTemplate("song_list/context_menu.ejs"),
        initialize: function () {
            this.constructor.__super__.initialize.apply(this, arguments), this.els = {
                fav: this.$(".add-to-favs"),
                add: this.$(".add-to-coll")
            }, GS.models.session.bind("log:in", this.loggedIn, this), GS.models.session.bind("log:out", this.loggedOut, this), GS.models.session.authenticated() ? this.loggedIn() : this.loggedOut()
        },
        beforeShow: function () {
            var e = this._options.model;
            e.isFavorited() ? (this.els.fav.addClass("faved"), this.els.add.addClass("added")) : e.isAdded() && this.els.add.addClass("added")
        },
        onHide: function () {
            this.els.fav.removeClass("faved"), this.els.add.removeClass("added")
        },
        loggedIn: function () {
            this.els.fav.show(), this.els.add.show()
        },
        loggedOut: function () {
            this.els.fav.hide(), this.els.add.hide()
        },
        events: {
            "click .play-now": "playNow",
            "click .play-next": "playNext",
            "click .play-last": "playLast",
            "click .add-to-favs": "favorite",
            "click .add-to-coll": "add"
        },
        playNow: function (e) {
            GS.models.queue.playNow(this._options.model), GS.audio.playNow(), GS.tracking.trackEvent("context_menu", "play_now")
        },
        playNext: function (e) {
            GS.models.queue.addNext(this._options.model), GS.tracking.trackEvent("context_menu", "play_next")
        },
        playLast: function (e) {
            GS.models.queue.addLast(this._options.model), GS.tracking.trackEvent("context_menu", "play_last")
        },
        _createRowHandlers: function (e) {
            return [_.bind(function (t) {
                this.options.parent[t ? "fav" : "unfav"](e)
            }, this), _.bind(function (t) {
                this.options.parent[t ? "add" : "unadd"](e)
            }, this)]
        },
        favorite: function (e) {
            var t = this._options.model,
                n = this._options.row;
            GS.models.session.favorite(t, this._createRowHandlers(n))
        },
        add: function (e) {
            var t = this._options.model,
                n = this._options.row;
            GS.models.session.add(t, this._createRowHandlers(n))
        }
    });
    e.GS.views.SongContextMenu = a;
    var f = Backbone.View.extend({
        className: "sort-floating",
        template: GS.h.getTemplate("song_list/sort.ejs"),
        initialize: function (e) {
            this.$el = $(this.el)
        },
        render: function () {
            this.$el.html(this.template({
                choices: this.options.choices,
                sorted: this.options.sorted
            })), this.el.parentNode !== this.options.$parent[0] && this.options.$parent.append(this.$el)
        },
        toggle: function (e) {
            e = e || {}, this.options.sorted = e.sorted || {}, this._shown ? this.hide() : this.show()
        },
        show: function () {
            this.render(), this.$el.show(), this._shown = !0
        },
        hide: function () {
            this.$el.hide(), this._shown = !1
        },
        events: {
            "click li": "report"
        },
        report: function (e) {
            var t = $(e.target);
            this.trigger("choosen", {
                choice: t.attr("action-id")
            }), this.hide()
        }
    });
    e.GS.views.Sort = f;
    var l = Backbone.View.extend({
        templates: {
            header: GS.h.getTemplate("song_list/header.ejs")
        },
        className: "list-header",
        initialize: function () {
            this.$el = $(this.el), this.render()
        },
        render: function () {
            return this.$el.html(this.templates.header({
                count: this.collection.length
            })), this.sort = new GS.views.Sort({
                $parent: this.$el,
                choices: this.options.choices
            }), this.$el.appendTo(this.options.$parent), this
        },
        events: {
            "click .list-header-sort": "toggleSort",
            "click .list-header-play-now": "playAll"
        },
        toggleSort: function (e) {
            this.sort.toggle({
                sorted: this.collection._sorted
            })
        },
        playAll: function (e) {
            this.collection.length > 25 ? (GS.models.queue.playNow(this.collection.toArray()), GS.audio.playNow()) : this.collection.length && (GS.models.queue.playNow(this.collection.toArray()), GS.audio.playNow())
        }
    });
    e.GS.views.CollectionHeader = l;
    var c = Backbone.View.extend({
        initialize: function () {
            this.$el = $(this.el), this.collection.bind("reset", this.render, this), this.collection.loaded() ? this.render() : GS.views.spinner.show("Loading " + this.pageTitle + "...")
        },
        render: function () {
            if (this._rendered) return;
            GS.views.spinner.hide(), this.header = new GS.views.CollectionHeader({
                $parent: this.$el,
                collection: this.collection,
                choices: this.choices || [
                    ["SORT_DATE", "age"],
                    ["SORT_SONG", "song"],
                    ["SORT_ARTIST", "artist"]
                ]
            }), this.header.sort.bind("choosen", this.onSort, this), this.list = new GS.views.SongList({
                $parent: this.$el,
                collection: this.collection,
                offset: [0, 1]
            }), this._rendered = !0
        },
        onSort: function (e) {
            if (!e.choice) throw new Error("Collection view expects Sort to return a choice");
            this.list.destroy(), this.list = new GS.views.SongList({
                $parent: this.$el,
                collection: this.collection.sortBy(e.choice),
                offset: [0, 1]
            })
        },
        remove: function () {
            this.list && (this.list = this.list.destroy()), this.header && this.header.sort && this.header.sort.unbind("choosen", this.onSort), Backbone.View.prototype.remove.call(this)
        }
    });
    e.GS.views.Collection = c;
    var h = Backbone.View.extend({
        el: $("#flash"),
        show: function (e, t) {
            if (!e) return;
            this.el.html(GS.h.makeMessage(e)), this.el.addClass("shown"), _.delay(_.bind(this.hide, this), t || 1250)
        },
        hide: function () {
            this.el.removeClass("shown")
        }
    });
    e.GS.views.Flash = h;
    var p = Backbone.View.extend({
        template: GS.h.getTemplate("pages/search/form.ejs"),
        initialize: function (e) {
            return this.els = {}, this.$el = $(this.el), this.render(this.options.query), this
        },
        render: function (e) {
            return this.$el.html(this.template({
                query: e || ""
            })), this.els.q = this.$("form input[name=q]"), this.els.q.bind("focus", _.bind(this.hideBottom, this)), this.els.q.bind("blur", _.bind(this.showBottom, this)), this._wrapped = _.bind(this.hideKB, this), $(document.body).on("touchstart", this._wrapped), this.el
        },
        hideKB: function () {
            this.els.q && this.els.q.blur()
        },
        remove: function () {
            $(document.body).off("touchstart", this._wrapped), this.els.q.unbind("focus"), this.els.q.unbind("blur"), Backbone.View.prototype.remove.call(this)
        },
        events: {
            submit: "submit",
            "click .input-reduce": "autoFocus"
        },
        submit: function (e) {
            var t = this.els.q.val();
            if (t === "") return;
            this.showBottom(), _.delay(_.bind(this.hideKB, this), 150), e.preventDefault(), GS.h.navigate("/search/" + encodeURIComponent(t))
        },
        autoFocus: function (e) {
            this.els.q.focus()
        },
        hideBottom: function () {
            this.els.hideThese || (this.els.hideThese = $(".bottombar")), this.els.hideThese.hide()
        },
        showBottom: function () {
            this.els.hideThese.show()
        }
    });
    e.GS.views.SearchForm = p
}(this),
function (e, t) {
    var n = Backbone.View.extend({
        el: $("#app"),
        renderPage: function (e) {
            this.active = e, this.el.append(this.active.el), this.trigger("app:navigated", {
                item: this.active.navItem
            })
        },
        destroyPage: function () {
            this.active && (this.active.unbind(), this.active.remove(), this.active = null, this._hidden = !1, GS.views.spinner.hide())
        },
        hide: function () {
            this.active && ($(this.active.el).hide(), this._hidden = !0)
        },
        show: function () {
            this.active && (this.trigger("app:navigated", {
                item: this.active.navItem
            }), $(this.active.el).show(), this._hidden = !1)
        },
        events: {
            "submit form": "submit"
        },
        submit: function (e) {
            e.preventDefault()
        }
    });
    e.GS.views.app = new n;
    var r = Backbone.View.extend({
        el: $("#main-menu"),
        templates: {
            searchForm: GS.h.getTemplate("pages/search/form.ejs"),
            userMenu: GS.h.getTemplate("user_menu.ejs")
        },
        initialize: function () {
            GS.views.app.bind("app:navigated", this.markActive, this), GS.models.session.bind("log:in", this.loggedIn, this), GS.models.session.bind("log:out", this.loggedOut, this), this.body = $(document.body), this.els = {}, document.documentElement.clientWidth >= 768 && (this._persistAfterClick = !0, this.show())
        },
        render: function () {
            if (this._rendered) return;
            this.els.form = $(this.templates.searchForm()), this.els.form.appendTo(this.$(".search-menu")), this.els.q = this.els.form.find("input"), this.els.q.on("focus", _.bind(this.checkIfWeWantFocus, this)), this.$html = $(document.documentElement), this.els.q.on("focus", _.bind(this.focused, this)), this.els.q.on("blur", _.bind(this.blurred, this)), GS.models.session.authenticated() ? this.loggedIn() : this.loggedOut(), this._rendered = !0, this.markActive(this._options), delete this._options
        },
        checkIfWeWantFocus: function (e) {
            this._touched || e.target.blur()
        },
        disableScroll: function (e) {
            e.preventDefault()
        },
        focused: function (e) {
            this.$html.on("touchmove", this.disableScroll), _.delay(_.bind(function () {
                this.$html.addClass("has-keyboard")
            }, this), 0)
        },
        blurred: function (e) {
            this.$html.off("touchmove", this.disableScroll), _.delay(_.bind(function () {
                this.$html.removeClass("has-keyboard")
            }, this), 0)
        },
        show: function () {
            this._touched = !1, this.render(), this.body.addClass("show-menu"), this._persistAfterClick || GS.views.scroller.trigger("scroller:hide-addressbar"), this._shown = !0, GS.guts.log("sidebarOpened")
        },
        hide: function () {
            _.delay(_.bind(function () {
                this.els.q.blur()
            }, this), $.os.android ? 250 : 0), this.body.removeClass("show-menu"), this._shown = !1, GS.guts.log("sidebarClosed")
        },
        toggle: function () {
            this._shown ? this.hide() : this.show()
        },
        markActive: function (e) {
            e = e || {};
            if (!this._rendered) {
                this._options = e;
                return
            }
            var t = this.$("#nav-" + e.item);
            this.active && this.active.removeClass("selected"), t && (this.active = t.addClass("selected"))
        },
        getElements: function () {
            this.els.loggedIn = this.els.loggedIn || this.$(".menu-loggedin"), this.els.loggedOut = this.els.loggedOut || this.$(".menu-loggedout"), this.els.userMenu = this.els.userMenu || this.$("#user-menu")
        },
        loggedIn: function () {
            this.getElements(), this.els.userMenu.html(this.templates.userMenu({
                user: GS.models.session.toJSON()
            })), this.els.loggedOut.hide(), this.els.loggedIn.show()
        },
        loggedOut: function () {
            this.getElements(), this.els.userMenu.html(""), this.els.loggedOut.show(), this.els.loggedIn.hide()
        },
        events: function () {
            var t = {
                "click a": "useMenuItem",
                "submit form": "doSearch",
                "click #menu-logout": "doLogout"
            };
            return "ontouchstart" in e ? t.touchstart = "beenTouched" : t.mousedown = "beenTouched", t
        },
        beenTouched: function () {
            this._touched = !0
        },
        useMenuItem: function (e) {
            this._persistAfterClick || this.hide()
        },
        doSearch: function (e) {
            var t = this.els.q.val();
            if (t === "") return;
            this._persistAfterClick ? this.els.q.blur() : this.hide(), this.els.q.val(""), e.preventDefault(), GS.h.navigate("/search/" + encodeURIComponent(t))
        },
        doLogout: function (e) {
            GS.models.session.destroy()
        }
    });
    e.GS.views.mainMenu = new r;
    var i = Backbone.View.extend({
        el: $("#page-header"),
        initialize: function () {
            GS.views.app.bind("app:navigated", this.render, this), GS.models.session.bind("log:in", this.loggedIn, this), GS.models.session.bind("log:out", this.loggedOut, this), this.els = {
                title: this.$(".page-title"),
                login: this.$("#header-login")
            }
        },
        render: function (e) {
            e = e || {}, e.title && this.setTitle(e.title), GS.models.session.authenticated() ? this.loggedIn() : this.loggedOut()
        },
        setTitle: function (e) {
            this.els.title.text(e), this.updateTitle(e)
        },
        updateTitle: function () {
            var e = document.title;
            return function (t) {
                document.title = t + " - " + e
            }
        }(),
        loggedIn: function () {
            this.els.login.hide()
        },
        loggedOut: function () {
            this.els.login.show()
        },
        events: function () {
            var t = {}, n = "ontouchstart" in e ? "touchstart" : "mousedown";
            return t[n + " .menu"] = "toggleMenu", t
        },
        toggleMenu: function (e) {
            return GS.views.mainMenu.toggle(), e.preventDefault(), !1
        }
    });
    e.GS.views.header = new i;
    var s = Backbone.View.extend({
        el: $("#loading"),
        show: function (e) {
            if (!e) return;
            this.el.html(GS.h.makeMessage(e)), this.el.parent().addClass("shown")
        },
        hide: function () {
            this.el.parent().removeClass("shown")
        }
    });
    e.GS.views.spinner = new s, e.GS.views.queueFlash = new(GS.views.Flash.extend({
        initialize: function () {
            GS.models.queue.bind("batch:add", this.collect, this)
        },
        collect: function (e) {
            e = e || {};
            var t = e.models.length;
            this.show(_.getString(t > 1 ? "ADD_TO_QUEUE_MULTI" : "ADD_TO_QUEUE_SINGLE", {
                number: t
            }))
        }
    }));
    var o = Backbone.View.extend({
        el: "#wrapper",
        initialize: function () {
            this.body = $(document.body), e.addEventListener("scroll", _.debounce(_.bind(this.onScroll, this), 100)), this.bind("scroller:hide-addressbar", this.hideAddressbar, this), GS.views.app.bind("app:navigated", this.hideAddressbar, this), this.bind("scroller:little-queue", this.makeRoomForLQ, this), this.bind("scroller:little-queue-hide", this.removeRoomForLQ, this), this.bind("scroller:station", this.makeRoomForStation, this), this.bind("scroller:station-hide", this.removeRoomForStation, this)
        },
        scrollTo: function () {
            $.os.ios && (this._fixFixed = this._fixFixed || $(".fix-fixed")), $.os.ios && this._fixFixed.addClass("reset"), e.scrollTo.apply(e, arguments), $.os.ios && this._fixFixed.removeClass("reset")
        },
        onScroll: function () {
            var t = GS.h.getBodyScrollHeight(),
                n = e.innerHeight,
                r = e.pageYOffset;
            $.os.iphone && (n += 60), r + n + 5 >= t && this.trigger("scroller:scrolled-bottom")
        },
        hideAddressbar: function () {
            _.delay(_.bind(function () {
                var t = GS.h.getBodyScrollHeight();
                t > e.innerHeight && this.scrollTo(0, 1)
            }, this), 750)
        },
        makeRoomForLQ: function () {
            this.body.addClass("room-for-little-queue")
        },
        removeRoomForLQ: function () {
            this.body.removeClass("room-for-little-queue")
        },
        makeRoomForStation: function () {
            this.body.addClass("room-for-station")
        },
        removeRoomForStation: function () {
            this.body.removeClass("room-for-station")
        }
    });
    e.addEventListener("DOMContentLoaded", function () {
        GS.views.scroller = new o
    })
}(this),
function () {
    var e = Backbone.View.extend({
        attachCloseListener: function () {
            if (this.wasShown()) return;
            var e = $(document.body),
                t = "tap",
                n = _.bind(function (r) {
                    _.delay(_.bind(this.hide, this), this._delay || 0), GS.h.write(this.storageKey, !0, !0), e.unbind(t, n)
                }, this);
            e.bind(t, n)
        },
        wasShown: function () {
            return GS.h.read(this.storageKey, !0)
        },
        hide: function () {
            this.$el.hide()
        }
    }),
        t = e.extend({
            el: $("#ios-pin"),
            storageKey: "pinnotification:shown",
            initialize: function () {
                this.$el = $(this.el), this.attachCloseListener()
            },
            show: function () {
                this.wasShown() || this.$el.show()
            }
        }),
        n = e.extend({
            id: "get-app",
            storageKey: "getapp:shown",
            template: GS.h.getTemplate("getapp.ejs"),
            initialize: function () {
                this.$el = $(this.el), this.attachCloseListener(), $.os.iphone ? this.platform = "iPhone" : $.os.ipad ? this.platform = "iPad" : $.os.webos ? this.platform = "Blackberry" : $.os.touchpad ? this.platform = "Touchpad" : $.os.android && (this.platform = "Android"), GS.views.app.bind("app:navigated", this.show, this)
            },
            render: function () {
                this.$el.html(this.template({
                    platform: this.platform
                })), $(GS.views.app.active.el).prepend(this.el)
            },
            show: function () {
                this.render(), this.wasShown() || this.$el.show(), GS.views.app.unbind("app:navigated", this.show)
            },
            wasShown: function () {
                return !1
            },
            events: {
                "click a": "click"
            },
            click: function (e) {
                this._delay = 300
            }
        });
    window.addEventListener("DOMContentLoaded", function () {
        /autoRedirected/.test(document.cookie) ? (document.cookie = "autoRedirected=; expires=Thu, 01 Jan 1970 00:00:00 GMT;", GS.views.getapp = new n) : $.os.iphone && (GS.views.pinnotif = new t, GS.views.pinnotif.show())
    })
}(),
function (e, t) {
    var n = Backbone.View.extend({
        template: GS.h.getTemplate("pages/stations/list.ejs"),
        navItem: "stations",
        pageTitle: "Stations",
        initialize: function (e) {
            this.$el = $(this.el), this.els = {
                list: $(this.make("ul", {
                    className: "list"
                }))
            }, this.render(), this.pageTitle != _.getString("STATIONS") && (this.pageTitle = _.getString("STATIONS")), this.collection.bind("stopped", this.stop, this)
        },
        render: function () {
            var e = this.options.stations || this.collection.sortBy(function (e) {
                return e.get("title")
            });
            this.els.list.html(this.template({
                stations: e,
                active: this.collection.playing()
            })), this.$el.append(this.els.list)
        },
        start: function (t) {
            this.station = this.collection.get(t);
            var n = _.getString("STATION_CLEAR_MSG", {
                station: this.station.get("title")
            });
            if (GS.models.queue.length > 0 && !e.confirm(n)) return;
            GS.views.spinner.show(_.getString("STATION_LOADING_MSG", {
                station: this.station.get("title")
            })), this.station.start(), GS.views.Radio.instance(this.station), this.station.bind("readytoplay", this.play, this), this.station.bind("error", this.error, this), GS.audio.activatePlayback()
        },
        play: function () {
            GS.views.spinner.hide(), this.stationEl.addClass("list-row-station-playing")
        },
        error: function () {
            GS.views.spinner.hide(), e.alert(_.getString("STATION_FAILED_MSG"))
        },
        stop: function () {
            this.stationEl && (this.stationEl.removeClass("list-row-station-playing"), this.stationEl = null)
        },
        events: {
            "click .list-row-station": "click"
        },
        click: function (e) {
            var t = $(e.currentTarget),
                n = this.$el.find(".list-row-station-playing");
            n.length ? t.hasClass("list-row-station-playing") ? GS.audio.playNext() : n.length && n[0] !== t[0] && (n.removeClass("list-row-station-playing"), this.stationEl = t, this.start(this.stationEl.data("station-id"))) : (this.stationEl = t, this.start(this.stationEl.data("station-id")))
        }
    });
    e.GS.views.StationsList = n;
    var r = GS.views.Collection.extend({
        navItem: "popular",
        pageTitle: "Popular Songs",
        choices: [
            ["SORT_POPULARITY", "default"],
            ["SORT_SONG", "song"],
            ["SORT_ARTIST", "artist"],
            ["SORT_ALBUM", "album"]
        ]
    });
    e.GS.views.Popular = r;
    var i = Backbone.View.extend({
        navItem: "home",
        pageTitle: "Grooveshark",
        templates: {
            page: GS.h.getTemplate("pages/homepage.ejs"),
            show_more: GS.h.getTemplate("shared/show_more.ejs")
        },
        initialize: function (e) {
            this.$el = $(this.el), this.els = {}, this.collection.bind("reset", this.clearRecent, this), this.render()
        },
        render: function () {
            this.form = new GS.views.SearchForm, this.$el.append(this.form.el);
            var e = this.collection.getRecent().length > 0;
            this.$el.append(this.templates.page({
                haveSongs: e
            })), this.els.recentEl = this.$("#home-recent-songs"), this.els.stationsEl = this.$("#home-stations"), e && this.renderRecent(), this.renderStations()
        },
        renderRecent: function () {
            this.list = new GS.views.SongList({
                $parent: this.els.recentEl,
                collection: new GS.models.Songs(this.collection.getRecent()),
                renderAll: !0,
                noAd: !0
            })
        },
        clearRecent: function () {
            this.list && this.list.destroy(), this.els.recentEl && (this.els.recentEl.prev().remove(), this.els.recentEl.remove(), delete this.els.recentEl)
        },
        renderStations: function () {
            this.stations = new GS.views.StationsList({
                collection: GS.models.stations,
                stations: GS.models.stations.getPopular()
            }), this.stations.els.list.append(this.templates.show_more({
                where: "/music/stations",
                what: [_.getString("SEE_ALL_STATIONS")]
            })), this.els.stationsEl.append(this.stations.el)
        },
        remove: function () {
            this.form && this.form.remove(), this.list && this.list.destroy(), this.stations && this.stations.remove(), this.collection.unbind("reset", this.clearRecent), Backbone.View.prototype.remove.call(this)
        }
    });
    e.GS.views.Home = i
}(this),
function (e, t) {
    var n = Backbone.View.extend({
        templates: {
            badge: GS.h.getTemplate("shared/badge.ejs"),
            list: GS.h.getTemplate("albums/list.ejs")
        },
        initialize: function () {
            this.collection = this.model.songs, this.$el = $(this.el), this.els = {
                badge: $("<div>"),
                header: $("<div>"),
                list: $("<div>")
            }, this.$el.append(this.els.badge), this.$el.append(this.els.header), this.collection.length > 0 ? this.renderList() : GS.views.spinner.show(_.getString("LOADING_ALBUM")), this.model.bind("change", this.renderBadge, this), this.collection.bind("reset", this.renderHeader, this), this.collection.bind("reset", this.renderList, this)
        },
        renderHeader: function () {
            this.header = new GS.views.CollectionHeader({
                $parent: this.els.header,
                collection: this.collection,
                choices: [
                    ["SORT_TRACK", "track"],
                    ["SORT_SONG", "song"],
                    ["SORT_ARTIST", "artist"],
                    ["SORT_ALBUM", "album"]
                ]
            }), this.header.sort.bind("choosen", this.onSort, this)
        },
        renderBadge: function () {
            GS.views.header.setTitle(this.model.get("name")), this.els.badge.html(this.templates.badge({
                pic: this.model.get("picURL"),
                header: this.model.get("name"),
                subheader: "by " + this.model.get("ArtistName")
            }))
        },
        renderList: function () {
            GS.views.spinner.hide(), this.list = new GS.views.SongList({
                $parent: this.els.list,
                collection: this.collection,
                offset: [1, 1]
            }), this.$el.append(this.els.list)
        },
        onSort: function (e) {
            if (!e.choice) throw new Error("Collection view expects Sort to return a choice");
            this.list.destroy(), this.list = new GS.views.SongList({
                $parent: this.els.list,
                collection: this.collection.sortBy(e.choice),
                offset: [1, 1]
            })
        },
        remove: function () {
            return this.model.unbind("change", this.renderBadge), this.collection.unbind("reset", this.renderHeader), this.collection.unbind("reset", this.renderList), this.list && this.list.destroy(), this.header && this.header.sort && this.header.sort.unbind("choosen", this.onSort), Backbone.View.prototype.remove.call(this)
        }
    });
    e.GS.views.AlbumPage = n;
    var r = Backbone.View.extend({
        initialize: function () {
            this.$el = $(this.el), this.collection.length > 0 ? this.render() : (GS.views.spinner.show(_.getString("LOADING_ALBUMS")), this.collection.bind("reset", this.render, this))
        },
        render: function () {
            GS.views.spinner.hide(), this.list = new GS.views.AlbumList({
                $parent: this.$el,
                collection: this.collection
            })
        },
        remove: function () {
            return this.list && this.list.destroy(), this.collection.unbind("reset", this.render), Backbone.View.prototype.remove.call(this)
        }
    });
    e.GS.views.AlbumCollection = r
}(this),
function (e, t) {
    var n = Backbone.View.extend({
        templates: {
            badge: GS.h.getTemplate("shared/badge.ejs"),
            list: GS.h.getTemplate("playlists/list.ejs")
        },
        initialize: function () {
            this.collection = this.model.songs, this.$el = $(this.el), this.els = {
                badge: $("<div>"),
                header: $("<div>"),
                list: $("<div>")
            }, this.$el.append(this.els.badge), this.$el.append(this.els.header), this.collection.length > 0 ? (this.renderHeaders(), this.renderList()) : GS.views.spinner.show(_.getString("LOADING_PLAYLIST")), this.model.bind("change", this.renderHeaders, this), this.collection.bind("reset", this.renderList, this)
        },
        renderHeaders: function () {
            var e = this.model.get("Username"),
                t = e.split(" ")[0],
                n = this.model.get("SubscriberCount"),
                r = e;
            this.pageTitle || (this.pageTitle = t + "'s playlist"), GS.views.header.setTitle(this.pageTitle), n && (r += ", " + n + " subscriber" + (n > 1 ? "s" : "")), this.header = new GS.views.CollectionHeader({
                $parent: this.els.header,
                collection: this.collection,
                choices: [
                    ["SORT_DEFAULT", "default"],
                    ["SORT_TRACK", "track"],
                    ["SORT_SONG", "song"],
                    ["SORT_ARTIST", "artist"],
                    ["SORT_ALBUM", "album"]
                ]
            }), this.header.sort.bind("choosen", this.onSort, this), this.els.badge.html(this.templates.badge({
                pic: this.model.get("picURL"),
                header: this.model.get("Name"),
                subheader: r
            }))
        },
        renderList: function () {
            GS.views.spinner.hide(), this.list = new GS.views.SongList({
                $parent: this.els.list,
                collection: this.collection,
                offset: [1, 1]
            }), this.$el.append(this.els.list)
        },
        onSort: function (e) {
            if (!e.choice) throw new Error("Collection view expects Sort to return a choice");
            this.list.destroy(), this.list = new GS.views.SongList({
                $parent: this.els.list,
                collection: this.collection.sortBy(e.choice),
                offset: [1, 1]
            })
        },
        remove: function () {
            return this.model.unbind("change", this.renderHeaders), this.collection.unbind("reset", this.renderList), this.list && this.list.destroy(), this.header && this.header.sort && this.header.sort.unbind("choosen", this.onSort), Backbone.View.prototype.remove.call(this)
        }
    });
    e.GS.views.PlaylistPage = n;
    var r = Backbone.View.extend({
        initialize: function () {
            this.$el = $(this.el), this.collection.length > 0 ? this.render() : (GS.views.spinner.show(_.getString("LOADING_PLAYLISTS")), this.collection.bind("reset", this.render, this))
        },
        render: function () {
            GS.views.spinner.hide(), this.list = new GS.views.PlaylistList({
                $parent: this.$el,
                collection: this.collection
            })
        },
        remove: function () {
            return this.list && this.list.destroy(), this.collection.unbind("reset", this.render), Backbone.View.prototype.remove.call(this)
        }
    });
    e.GS.views.PlaylistCollection = r
}(this),
function (e, t) {
    var n = Backbone.View.extend({
        navItem: "search",
        pageTitle: "Search",
        className: "search-page",
        templates: {
            show_more: GS.h.getTemplate("shared/show_more.ejs"),
            results: GS.h.getTemplate("pages/search/results.ejs")
        },
        initialize: function (e) {
            this.$el = $(this.el), this.els = {}, this.lists = [], this.searchForm = new GS.views.SearchForm({
                query: this.options.query
            }), this.$el.append(this.searchForm.el), this.model && (this.model.haveResults() ? this.results() : (this.model.bind("change", this.results, this), GS.views.spinner.show(_.getString("SEARCHING_FOR", {
                query: this.options.query
            }))))
        },
        results: function () {
            GS.views.spinner.hide();
            var e = this.model.songs.toArray().slice(0, 4),
                t = this.model.albums.toArray().slice(0, 4),
                n = this.model.playlists.toArray().slice(0, 4);
            this.$el.append(this.templates.results({
                songsNumber: e.length,
                albumsNumber: t.length,
                playlistsNumber: n.length
            })), this.model.songs.length > 0 && (this.els.songList = this.els.songList || this.$("#search-results-songs"), this.lists.push(new GS.views.SongList({
                collection: new GS.models.Songs(e),
                $parent: this.els.songList,
                renderAll: !0,
                noAd: !0
            })), this.lists[this.lists.length - 1].$el.append(this.templates.show_more({
                where: "/search/songs/" + this.options.query,
                what: [_.getString("SHOW_MORE_SONGS"), this.model.songs.length]
            }))), this.model.albums.length > 0 && (this.els.albumList = this.els.albumList || this.$("#search-results-albums"), this.lists.push(new GS.views.AlbumList({
                collection: t,
                $parent: this.els.albumList,
                renderAll: !0,
                noAd: !0
            })), this.lists[this.lists.length - 1].$el.append(this.templates.show_more({
                where: "/search/albums/" + this.options.query,
                what: [_.getString("SHOW_MORE_ALBUMS"), this.model.albums.length]
            }))), this.model.playlists.length > 0 && (this.els.playlistList = this.els.playlistList || this.$("#search-results-playlists"), this.lists.push(new GS.views.PlaylistList({
                collection: n,
                $parent: this.els.playlistList,
                renderAll: !0,
                noAd: !0
            })), this.lists[this.lists.length - 1].$el.append(this.templates.show_more({
                where: "/search/playlists/" + this.options.query,
                what: [_.getString("SHOW_MORE_PLAYLISTS"), this.model.playlists.length]
            }))), GS.views.scroller.trigger("scroller:hide-addressbar")
        },
        remove: function () {
            for (var e = 0; e < this.lists.length; e++) this.lists[e].destroy();
            this.searchForm && this.searchForm.remove(), this.model && this.model.unbind("change", this.results), Backbone.View.prototype.remove.call(this)
        }
    });
    e.GS.views.SearchResults = n;
    var r = GS.views.Collection.extend({
        initialize: function () {
            var e = this.model.query;
            this.pageTitle = "'" + e + "' " + _.getString("SONGS"), GS.views.Collection.prototype.initialize.apply(this, arguments)
        }
    });
    e.GS.views.SongsResults = r;
    var i = GS.views.PlaylistCollection.extend({
        initialize: function () {
            var e = this.model.query;
            this.pageTitle = "'" + e + "' " + _.getString("PLAYLISTS"), GS.views.PlaylistCollection.prototype.initialize.apply(this, arguments)
        }
    });
    e.GS.views.PlaylistsResults = i;
    var s = GS.views.AlbumCollection.extend({
        initialize: function () {
            var e = this.model.query;
            this.pageTitle = "'" + e + "' " + _.getString("ALBUMS"), GS.views.AlbumCollection.prototype.initialize.apply(this, arguments)
        }
    });
    e.GS.views.AlbumsResults = s
}(this),
function (e, t) {
    var n = Backbone.View.extend({
        navItem: "login",
        pageTitle: "Sign in",
        template: GS.h.getTemplate("pages/session/login.ejs"),
        initialize: function () {
            this.model.bind("error", this.error, this), this.render()
        },
        render: function () {
            $(this.el).html(this.template()), this.$form = this.$("form")
        },
        error: function (e) {
            this.$error = this.$error || this.$(".form-error"), this.$error.show(), this.$("input").one("focus", _.bind(this.hideError, this)), GS.views.spinner.hide()
        },
        hideError: function (e) {
            this.$error.hide()
        },
        events: {
            "submit form": "submit"
        },
        submit: function (e) {
            this.model.authenticate({
                parameters: this.$form.serializeHash()
            }), GS.views.spinner.show(_.getString("LOGGING_IN")), e.preventDefault()
        }
    });
    e.GS.views.Login = n;
    var r = Backbone.View.extend({
        navItem: "login",
        pageTitle: _.getString("FORGOT_PW_TITLE"),
        template: GS.h.getTemplate("pages/session/forgot_pass.ejs"),
        initialize: function () {
            this.model.bind("success", this.success, this), this.model.bind("fail", this.fail, this), this.render()
        },
        render: function () {
            $(this.el).html(this.template()), this.$form = this.$("form")
        },
        success: function () {
            GS.views.spinner.hide(), this.$notice = this.$notice || this.$(".form-notice"), this.$notice.show()
        },
        fail: function () {
            GS.views.spinner.hide(), this.$error = this.$error || this.$(".form-error"), this.$error.show()
        },
        events: {
            "submit form": "submit"
        },
        submit: function (e) {
            var t = this.$form.serializeHash();
            this.model.fetch({
                parameters: t
            }), GS.views.spinner.show(_.getString("FORGOT_PW_SPINNER")), e.preventDefault()
        }
    });
    e.GS.views.ForgotPass = r;
    var i = Backbone.View.extend({
        navItem: "signup",
        pageTitle: _.getString("SIGNUP_TITLE"),
        template: GS.h.getTemplate("pages/session/signup.ejs"),
        initialize: function () {
            this.render(), this.options.check.bind("checked", this.checkUser, this), GS.models.session.bind("error", this.handleErrors, this), this.$form = this.$("form")
        },
        remove: function () {
            this.options.check.unbind("checked", this.checkUser), GS.models.session.unbind("error", this.handleErrors), Backbone.View.prototype.remove.call(this)
        },
        render: function () {
            $(this.el).html(this.template())
        },
        checkUser: function (e, t) {
            var n = [{
                name: "email",
                error: e.email ? !1 : _.getString("EMAIL_TAKEN")
            }, {
                name: "username",
                error: e.username ? !1 : _.getString("USERNAME_TAKEN")
            }];
            !e.email || !e.username ? this.renderErrors(n) : this.registerUser()
        },
        registerUser: function () {
            var e = this.$form.serializeHash(),
                t = [e["dob-year"], e["dob-month"], e["dob-day"]].join("-");
            GS.models.session.register({
                parameters: {
                    birthDate: t,
                    emailAddress: e.email,
                    firstName: e.username,
                    lastName: "",
                    username: e.username,
                    password: e.password,
                    savePassword: !1
                }
            })
        },
        handleErrors: function (e) {
            this.renderErrors(e.details)
        },
        renderErrors: function (e) {
            GS.views.spinner.hide(), this.removeErrors(), this.$errors = $('<div class="form-error form-error-display">'), _.isString(e) ? this.$errors.append("<p>" + e + "</p>") : _.each(e, function (e, t) {
                e.error && this.$errors.append("<p>" + e.error + "</p>")
            }, this), this.$form.prepend(this.$errors)
        },
        removeErrors: function () {
            this.$errors && this.$errors.remove()
        },
        getHumanReadableName: function (e) {
            var t = this.$form[0][e];
            return t.nodeName.toLowerCase() === "select" ? t.children[0].innerText : $(t).attr("placeholder")
        },
        validate: function (e) {
            e = e || [];
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (n.value === "") {
                    n.error = _.getString("REQUIRED_FIELD", {
                        fieldName: this.getHumanReadableName(n.name)
                    });
                    continue
                }
                if (n.name === "dob-year") {
                    var r = parseInt(n.value, 10);
                    (new Date).getFullYear() - r < 13 && (n.error = _.getString("OLDER_13"))
                }
                n.name === "password" && (n.value.length < 5 || n.value.length > 32) && (n.error = _.getString("PW_LENGTH_ERR"));
                if (n.name === "password2") {
                    var i = e[t - 1].value;
                    if (!i) continue;
                    n.value !== i && (n.error = _.getString("PW_DONT_MATCH"))
                }
            }
            return e
        },
        isValid: function (e) {
            var t = !0;
            for (var n = 0; n < e.length; n++)
                if (e[n].error) return !1;
            return !0
        },
        events: {
            "submit form": "submit"
        },
        submit: function (e) {
            var t = this.validate(this.$form.serializeArray()),
                n = this.$form.serializeHash();
            this.isValid(t) ? (this.removeErrors(), GS.views.spinner.show(_.getString("LOADING")), this.options.check.fetch({
                parameters: {
                    username: n.username,
                    emailAddress: n.email
                }
            })) : this.renderErrors(t), e.preventDefault()
        }
    });
    e.GS.views.SignUp = i
}(this),
function (e, t) {
    var n = GS.views.Collection.extend({
        pageTitle: _.getString("COLLECTION"),
        initialize: function () {
            this.collection.isYou() && (this.navItem = "user-collection"), GS.views.Collection.prototype.initialize.apply(this, arguments)
        }
    });
    e.GS.views.Library = n;
    var r = GS.views.Collection.extend({
        pageTitle: _.getString("FAVORITES"),
        initialize: function () {
            this.collection.isYou() && (this.navItem = "user-favorites"), GS.views.Collection.prototype.initialize.apply(this, arguments)
        }
    });
    e.GS.views.Favorites = r;
    var i = GS.views.PlaylistCollection.extend({
        pageTitle: _.getString("PLAYLISTS"),
        initialize: function () {
            this.collection.isYou() && (this.navItem = "user-playlists"), GS.views.Collection.prototype.initialize.apply(this, arguments)
        }
    });
    e.GS.views.UserPlaylists = i;
    var s = Backbone.View.extend({
        pageTitle: _.getString("FOLLOWING"),
        initialize: function (e) {
            if (!e.collection) throw new Error("No idea how to show user followers w/o a collection");
            this.collection.isYou() && (this.navItem = "user-following"), this.$el = $(this.el), this.collection.length > 0 ? this.render() : GS.views.spinner.show(_.getString("LOADING_FOLLOWING")), this.collection.bind("reset", this.render, this)
        },
        render: function () {
            GS.views.spinner.hide();
            var e = _.sortBy(this.collection.toArray(), function (e) {
                return e = e.attributes, e.picURL
            });
            this.list = new GS.views.UserList({
                $parent: this.$el,
                collection: e
            })
        },
        remove: function () {
            this.list && this.list.destroy(), this.collection.unbind("reset", this.render), Backbone.View.prototype.remove.call(this)
        }
    });
    e.GS.views.Following = s;
    var o = Backbone.View.extend({
        pageTitle: _.getString("PROFILE"),
        templates: {
            badge: GS.h.getTemplate("shared/badge.ejs"),
            list: GS.h.getTemplate("pages/profile/count_list.ejs")
        },
        initialize: function () {
            if (!(this.options.model instanceof GS.models.User)) throw new Error("Profile page expects this.options.model to be instance of User model");
            GS.models.session.isYou(this.options.model.id) && (this.navItem = "user-profile"), this.$el = $(this.el), this.options.model.bind("change", this.renderBadge, this), this.options.model.bindCollections("reset", this.updateCount, this), this.els = {
                badge: $("<div>"),
                list: $("<div>")
            }, this.render()
        },
        render: function () {
            this.renderBadge(), this.renderList(), this.searchForm = new GS.views.SearchForm, this.$el.append(this.searchForm.el).append(this.els.badge).append(this.els.list), this.els.q = this.$("input")
        },
        renderList: function () {
            var e = this.options.model;
            this.els.list.html(this.templates.list({
                user: e.toJSON(),
                favorites: e.favorites,
                library: e.library,
                playlists: e.playlists,
                following: e.following
            }));
            if (GS.models.session.isPremium()) return;
            var t = this.els.list.find("li");
            GS.ads.profile.placeAd({
                node: t[t.length - 1],
                after: !0
            })
        },
        updateCount: function (e, t) {
            this.$(".list-counts-" + e).removeClass("list-counts-loading").text(t.length)
        },
        renderBadge: function () {
            this.els.badge.html(this.templates.badge({
                pic: this.options.model.get("picURL"),
                header: this.options.model.get("fName")
            }))
        },
        remove: function () {
            return this.searchForm && this.searchForm.remove(), this.options.model.unbind("change", this.renderBadge), this.options.model.unbindCollections("reset", this.updateCount), Backbone.View.prototype.remove.call(this)
        }
    });
    e.GS.views.Profile = o
}(this),
function (e, t) {
    var n = Backbone.View.extend({
        templates: {
            song: GS.h.getTemplate("little_queue/song.ejs"),
            idle: GS.h.getTemplate("little_queue/idle.ejs")
        },
        el: $("#little-queue"),
        initialize: function (e) {
            this.collection.length > 0 && this.render(), GS.audio.bind("player:set-model", this.gotNewSong, this), GS.audio.bind("player:started", this.started, this), GS.audio.bind("player:error", this.gotNewSong, this), GS.audio.bind("player:stopped", this.stopped, this), GS.audio.bind("player:play", this.playing, this), GS.audio.bind("player:pause", this.paused, this), GS.audio.bind("player:ended", this.paused, this), this.collection.bind("add", this.render, this), this.collection.bind("remove", this.render, this)
        },
        gotNewSong: function (e) {
            e && e.model && (this.song = e.model, this.renderSong())
        },
        stopped: function () {
            this.song = null, this.render()
        },
        render: function () {
            if (this.song) return;
            this.collection.length !== 0 ? (this.el.html(this.templates.idle({
                number: this.collection.length
            })), this.show()) : this.hide()
        },
        renderSong: function (e) {
            this.el.html(this.templates.song({
                song: this.song.toJSON()
            })), this.show(), this.$state = this.$(".little-queue-state"), this._loading = !0, this._loading || (GS.audio.audio.paused ? this.paused() : this.playing())
        },
        started: function () {
            this.$state && this.$state.removeClass("loading").addClass("playing"), this._loading = !1
        },
        playing: function () {
            this.$state && this.$state.removeClass("paused").addClass("playing")
        },
        paused: function () {
            this.$state && this.$state.removeClass("playing").addClass("paused")
        },
        show: function () {
            if (this._shown) return;
            this.el.removeClass("hidden"), GS.views.scroller.trigger("scroller:little-queue"), this._shown = !0
        },
        hide: function () {
            this.el.addClass("hidden"), GS.views.scroller.trigger("scroller:little-queue-hide"), this._shown = !1
        },
        events: {
            click: "showQueue",
            "click .little-queue-state": "playPause",
            "click .little-queue-image": "showNowPlaying"
        },
        showNowPlaying: function (e) {
            GS.h.navigate("/now-playing")
        },
        showQueue: function (e) {
            if (this.$state && e.target === this.$state[0]) return !0;
            GS.h.navigate("/queue")
        },
        playPause: function (e) {
            if (this._loading) return !0;
            this.collection.current() && GS.audio.pauseResume()
        }
    }),
        r = Backbone.View.extend({
            el: $("#station-controls"),
            initialize: function (e) {
                this.template = GS.h.getTemplate("pages/stations/controls.ejs"), this.setModel(e)
            },
            setModel: function (e) {
                this.model && (this.model.unbind("readytoplay", this.render), this.model.unbind("stopped", this.hide)), this.model = e, this.model.bind("readytoplay", this.render, this), this.model.bind("stopped", this.hide, this), GS.audio.bind("player:set-model", function () {
                    this.$smile || (this.$smile = this.$(".smile")), this.$smile.removeClass("inactive")
                }, this)
            },
            render: function () {
                this.el.html(this.template({
                    station: this.model.toJSON()
                })), this.el.removeClass("hidden"), GS.views.scroller.trigger("scroller:station")
            },
            hide: function () {
                this.el.addClass("hidden"), GS.views.scroller.trigger("scroller:station-hide")
            },
            events: {
                "click .frown": "frown",
                "click .smile": "smile"
            },
            frown: function (e) {
                GS.guts.log("songDownVoted", {
                    songID: GS.models.queue.current().id
                }), GS.audio.playNext()
            },
            smile: function (e) {
                this.$smile = $(e.target), this.$smile.addClass("inactive"), GS.guts.log("songUpVoted", {
                    songID: GS.models.queue.current().id
                })
            }
        }, {
            instance: function () {
                var e;
                return function (t) {
                    return e ? t && t !== e.model && e.setModel(t) : e = new this(t), e
                }
            }()
        });
    e.addEventListener("DOMContentLoaded", function (e) {
        GS.views.littleQueue = new n({
            collection: GS.models.queue
        })
    }), e.GS.views.Radio = r
}(this),
function (e, t) {
    var n = function (e) {
        var t = function (e) {
            this.options = e || {}
        };
        return _.extend(t.prototype, n.prototype, e), t
    };
    _.extend(n.prototype, Backbone.Events, {
        validate: function (e) {
            return !0
        },
        parse: function (e) {
            var t = {};
            try {
                t = JSON.parse(e)
            } catch (n) {
                console.log("Failed to parse JSON, treating as raw html. ", n), t = {
                    image: {
                        html: e
                    }
                }
            }
            return t
        },
        error: function (e, t, n) {
            console.log(e, t || "", n || "")
        },
        request: function (e) {
            var t = _.Deferred(),
                n = this.options.context || this;
            $.ajaxSettings.beforeSend = function (e) {
                e.withCredentials = !1
            }, $.ajax({
                url: e,
                context: this,
                success: function (r) {
                    var i = this.parse(r);
                    this.validate(i) ? t.resolveWith(n, [i]) : t.rejectWith(n, ["JSON data is not valid", e, i])
                },
                error: function (r, i, s) {
                    t.rejectWith(n, [r, e])
                }
            });
            var r = t.promise().fail(this.error);
            return r._reject = _.bind(t.reject, t), r
        }
    });
    var r = n({
        validate: function (e) {
            var t = e,
                n, r, i, s;
            return t.audio && (n = !! t.audio.src && !! t.audio.time, n || delete t.audio), t.image && (r = !(!t.image.url || !t.image.src && !t.image.src_alt)), t.image && t.image.html && (i = !this.emptyHTML(t.image.html)), !r && !i && delete t.image, t.tracking && (s = _.isArray(t.tracking), s && _.filter(t.tracking, _.isString).filter(Boolean), (!s || !t.tracking.length) && delete t.tracking), !! (n || r || i)
        },
        emptyHTML: function (e) {
            var t = /.aimatch\.com\/default\.gif\b/g.test(e),
                n = /<br\/>/g.test(e);
            return t && n
        }
    }),
        i = function (e, t) {
            function i(e) {
                var t = [],
                    n = GS.models.session,
                    r = GS.models.queue.current();
                return n.authenticated() && (n.getAge() && t.push(["age", n.getAge()]), n.getGender() && t.push(["gender", n.getGender()])), r && (t.push(["artist", r.get("ArtistID")]), GS.h.latestTag() && t.push(["genre", GS.h.latestTag()])), t.push(["gslang", GS.config.lang]), t.push(["os", GS.h.os[0]]), t.push(["browser", GS.h.browser[0]]), $.os.phone && t.push(["phone", !0]), $.os.table && t.push(["tablet", !0]), e.concat(t)
            }
            var n = "http://crtl.aimatch.com/gshark/lserver/tserver/",
                r = GS.h.isProduction() ? "html5" : "html5staging";
            return function () {
                var s = [
                    ["site", r],
                    ["area", e],
                    ["size", t],
                    ["viewid", ~~ (Math.random() * 1e8)],
                    ["random", ~~ (Math.random() * 1e8)]
                ];
                return s = i(s), n + s.map(function (e) {
                    return e.join("=")
                }).join("/")
            }
        };
    GS.ads.perSong = new(Backbone.View.extend({
        el: $("#ads"),
        renderTracking: function (e) {
            this.$tracking || (this.$tracking = $('<div class="tracking">').appendTo(this.el)), e.map(function (e) {
                var t = /%n/g,
                    n = (new Date).getTime();
                return t.test(e) ? e.replace(t, n) : e.indexOf("?") > -1 ? e += "&" + n : e += "?" + n
            }).forEach(_.bind(function (e) {
                var t = document.createElement("img");
                t.setAttribute("src", e), this.$tracking.append(t)
            }, this))
        },
        clearTracking: function () {
            this.$tracking && this.$tracking.html("")
        },
        initialize: function () {
            this.transport = new r({
                context: this
            }), this._hide = _.bind(this.hide, this, 5e3)
        },
        req: function () {
            return GS.tracking.trackEvent("ad/req", "per_song"), this.transport.request(this.options.makeURL())
        },
        show: function (e) {
            this.banner = this.banner || new o, e.image && this.banner.render(e.image), e.audio && (this.audio && (this.audio = this.audio.destroy()), this.audio = new s({
                audio: e.audio
            }), this.audio.bind("ad:ended", this._hide)), e.tracking && this.renderTracking(e.tracking), e.image && !e.audio && this.hide(5e3), this.el.addClass("shown")
        },
        hide: function (e) {
            e = e || 0, this.audio && this.audio.unbind("ad:ended", this._hide), _.delay(_.bind(function () {
                this.banner && (this.banner = this.banner.destroy()), this.audio && (this.audio = this.audio.destroy()), this.clearTracking(), this.el.removeClass("shown")
            }, this), e)
        }
    }))({
        makeURL: i("html5_300x250_queue", "300x250")
    });
    var s = Backbone.View.extend({
        el: $("#audio-ad"),
        template: GS.h.getTemplate("ads/audio_ad.ejs"),
        initialize: function (e) {
            var t = $.os.ios ? "play" : "started";
            GS.audio.bind("player:" + t, this.render, this), GS.audio.bind("player:error", this.error, this)
        },
        unbind: function () {
            var e = $.os.ios ? "play" : "started";
            GS.audio.unbind("player:" + e, this.render), GS.audio.unbind("player:error", this.error)
        },
        error: function () {
            console.log("Can't play ad mp3"), this.render(), this.ended()
        },
        render: function () {
            this.unbind(), this.el.show();
            var e = this.options.audio.time;
            this.el.html(this.template({
                duration: e
            })), this.$timer = this.$(".timer");
            if ($.os.android) {
                var t = $.os.version.split(".").map(function (e) {
                    return parseInt(e, 10)
                });
                (t[0] < 4 || t[0] == 4 && t[1] < 1) && this.$(".ui-spinner").hide()
            }
            this.setTimer(e)
        },
        setTimer: function (t) {
            t--;
            var n = e.setInterval(_.bind(function () {
                this.$timer.html(t--), t < 0 && (this.ended(), e.clearInterval(n))
            }, this), 1e3)
        },
        ended: function () {
            this.trigger("ad:ended"), this.$(".countdown").hide(), this.$(".close-ad").show()
        },
        events: {
            "click .close-ad": "hide",
            "click .subscribe-ad": "showMessage"
        },
        hide: function (e) {
            this.el.hide(), GS.ads.perSong.hide()
        },
        showMessage: function () {
            e.alert(_.getString("ADFREE_COPY"))
        },
        destroy: function () {
            return this.el.html("").hide(), null
        }
    }),
        o = Backbone.View.extend({
            el: $("#banner-ad"),
            template: GS.h.getTemplate("ads/image_link_ad.ejs"),
            render: function (e, t) {
                this.el.html(this.template({
                    image: e,
                    hasClose: t || !1
                }))
            },
            destroy: function () {
                return this.el.html(""), null
            }
        });
    GS.ads.banner = new(o.extend({
        initialize: function (e) {
            this.transport = new r({
                context: this
            }), GS.audio.bind("player:30secpassed", this.tick, this), this.count = -1, this.times = 0, this._interacted = !0, this._hide = _.bind(this.hide, this)
        },
        tick: function () {
            if (GS.models.session.isPremium()) return;
            if (!this._interacted) {
                GS.guts.log("adBannerNotInteracted", {
                    times: ++this.times
                });
                return
            }
            return ++this.count, this.count > 0 && this.count % 3 === 0 && (this.req(), this.count = this.times = 0), this.count
        },
        req: function () {
            return GS.tracking.trackEvent("ad/req", "image_ad"), this.transport.request(this.options.makeURL()).done(this.done)
        },
        done: function (e) {
            this.render(e.image, !0), e.tracking && GS.ads.perSong.renderTracking(e.tracking), this.el.parent().addClass("shown"), this.el.bind("click", this._hide), this._interacted = !1
        },
        hide: function () {
            this._interacted = !0, GS.ads.perSong.clearTracking(), this.el.parent().removeClass("shown"), this.el.unbind("click", this._hide)
        }
    }))({
        makeURL: i("html5_300x250", "300x250")
    });
    var u = Backbone.View.extend({
        className: "list-row list-row-ad",
        tagName: "li",
        template: GS.h.getTemplate("ads/list_ad.ejs"),
        initialize: function (e) {
            if (!this.options.makeURL) throw new Error("Can't initialize list ads provider w/o makeURL method");
            this.$el = $(this.el), this.transport = new r({
                context: this
            })
        },
        render: function (e, t) {
            var n = t.image,
                r = n.html || this.template({
                    image: n
                });
            this.$el.html(r), this.$el[e.after ? "insertAfter" : "insertBefore"](e.node)
        },
        error: function (e, t) {
            this.$el.remove()
        },
        placeAd: function (e) {
            if (!e.node) throw new Error("No node to place list ad at");
            GS.tracking.trackEvent("ad/req", "list_ad"), this.transport.request(this.options.makeURL()).done(_.bind(this.render, this, e)).fail(this.error)
        }
    }),
        a = {
            makeURL: i("html5_320x50", "320x50")
        };
    GS.ads.list = new u(a), GS.ads.profile = new u(a)
}(this),
function (e, t) {
    var n = Backbone.View.extend({
        templates: {
            row: GS.h.getTemplate("now_playing/queue_song_list_row.ejs"),
            actions: GS.h.getTemplate("now_playing/queue_actions.ejs"),
            actions_edit: GS.h.getTemplate("now_playing/queue_actions_edit.ejs")
        },
        initialize: function () {
            this.model = GS.models.queuePreferences, this.page = 1, this.perPage = 40, this.heightPerRow = 59, this.renderRowsThrottled = _.throttle(_.bind(this.renderRows, this), 100), this.onScrollThrottled = _.throttle(_.bind(this.onScroll, this), 150), this.lastPageRendered = null, this._rows = {}, this.rowCache = {}, this.collection.bind("move", this.markActive, this), this.collection.bind("reset", this.clear, this), this.collection.bind("remove", this.removeRow, this), this.collection.bind("add", this.appendRow, this)
        },
        destroy: function () {
            return this.editModeOff(), this.collection.unbind("move", this.markActive), this.collection.unbind("reset", this.clear), this.collection.unbind("remove", this.removeRow), this.collection.unbind("add", this.appendRow), this.activeRow = this._rows = null, this.unbind(), this.remove(), e.removeEventListener("scroll", this.onScrollThrottled), null
        },
        getModelForRow: function (e) {
            return this.collection.getByCid(e.data("cid"))
        },
        getRowForModel: function (e) {
            return e ? this._rows[e.cid] : null
        },
        isRadioOn: function () {
            return !!GS.models.stations.playing()
        },
        render: function () {
            return this.$el = $(this.el), this.$actions = $(this.make("ul", {
                "class": "popover-topbar queue-list-actions"
            })), this.$list = $(this.make("ul", {
                "class": "list song-list queue-song-list"
            })), this.renderActions(), this.collection.length !== 0 && (e.addEventListener("scroll", this.onScrollThrottled), this.renderRowsThrottled()), this.$el.append(this.$actions), this.$el.append(this.$list), this
        },
        renderRows: function () {
            if (this.lastPageRendered === this.page) return;
            this.page = Math.max(this.page, 1), this.lastPageRendered = this.page;
            var e = Math.max(0, (this.page - 1) * this.perPage - 12),
                t = e + this.perPage + 24,
                n = this.collection.models.slice(e, t),
                r = this.rowCache,
                i = {}, s = e,
                o = document.createDocumentFragment();
            _.each(n, _.bind(function (e) {
                r[s] || (r[s] = this.createRow(e)), i[s] = r[s], o.appendChild(r[s][0]), s++
            }, this)), this.rowCache = i;
            var u = {
                position: "relative",
                paddingTop: this.heightPerRow * e,
                height: this.heightPerRow * this.collection.length - this.heightPerRow * e
            };
            this.$list.css(u).html("").append(o)
        },
        renderActions: function (e) {
            e = e || {};
            var t;
            e.edit ? t = this.templates.actions_edit() : t = this.templates.actions({
                prefs: this.model.toJSON(),
                isRadioOn: this.isRadioOn()
            }), this.$actions.html(t)
        },
        clear: function () {
            this._rows = {}, this.rowCache = {}, this.$list.html(""), this.lastPageRendered = null, this.renderRows(), this.$(".queue-list-action-disabled").removeClass("queue-list-action-disabled")
        },
        removeRow: function (e, t, n) {
            var r = this.getRowForModel(e);
            r.remove(), delete this._rows[e.cid], this.lastPageRendered = null, this.rowCache = {}, this.renderRows()
        },
        createRow: function (e) {
            var t, n = e === this.collection.current();
            return t = $(this.templates.row({
                song: e,
                isCurrent: n
            })), this._rows[e.cid] = t, n && (this.activeRow = t), t
        },
        appendRow: function (e, t, n) {
            var r = this.createRow(e);
            if (n.at) {
                this.rowCache = {};
                var i = this.getRowForModel(this.collection.at(n.at - 1));
                i.after(r)
            } else n.at === 0 ? (this.rowCache = {}, this.$list.prepend(r)) : this.$list.append(r);
            this.lastPageRendered = null, this.renderRows()
        },
        markActive: function (e) {
            var t = e.song,
                n = this.getRowForModel(t);
            this.unMarkActive(), n ? (n.addClass("current"), this.activeRow = n) : this.activeRow = null
        },
        unMarkActive: function () {
            this.activeRow && this.activeRow.removeClass("current")
        },
        editModeOn: function () {
            this._editing = !0, this.renderActions({
                edit: !0
            }), this.$el.addClass("queue-song-list-edit")
        },
        editModeOff: function () {
            this._editing && this.collection.store(), this.renderActions(), this._editing = !1, this.$el.removeClass("queue-song-list-edit")
        },
        onScroll: function () {
            var t = GS.h.getBodyScrollHeight(),
                n = e.innerHeight,
                r = e.pageYOffset,
                i = this.lastScrolled,
                s = ((this.page - 1) * this.perPage + 2) * this.heightPerRow,
                o = Math.min(this.page * this.perPage, this.collection.length),
                u = (o - 2) * this.heightPerRow,
                a = Math.ceil(this.collection.length / this.perPage),
                f = i === null || i > r,
                l = r <= s && f,
                c = r + n >= u && !f;
            if (l || c) this.page = Math.max(Math.round((r + n) / t * a), 1), this.renderRowsThrottled();
            this.lastScrolled = r
        },
        events: {
            "click .queue-song-row": "play",
            "contextmenu .queue-song-row": "edit",
            "click .queue-list-action-ordered": "toggleShuffle",
            "click .queue-list-action-norepeat": "toggleRepeat",
            "click .queue-list-action-edit": "edit",
            "click .queue-list-action-clear": "clearQueue",
            "click .queue-list-action-done": "saveEdit",
            "click .song-row-remove": "deleteRow",
            "click .queue-song-row-move-up": "moveRowUp",
            "click .queue-song-row-move-down": "moveRowDown"
        },
        play: function (e) {
            if (this._editing) return;
            var t = $(e.currentTarget),
                n = this.getModelForRow(t);
            !this.activeRow || t[0] !== this.activeRow[0] ? (GS.models.queue.playExisting(n), GS.audio.playNow()) : GS.audio.pauseResume()
        },
        toggleShuffle: function (e) {
            if (this.isRadioOn()) return;
            this.model.toggle("shuffle"), $(e.currentTarget).toggleClass("queue-list-action-shuffle"), GS.tracking.trackEvent("queue", "toggle_shuffle")
        },
        toggleRepeat: function (e) {
            if (this.isRadioOn()) return;
            this.model.toggle("repeat"), $(e.currentTarget).toggleClass("queue-list-action-repeat"), GS.tracking.trackEvent("queue", "toggle_repeat")
        },
        edit: function (e) {
            e.preventDefault(), this.editModeOn(), GS.tracking.trackEvent("queue", "edit")
        },
        clearQueue: function (t) {
            if (this.collection.length === 0) return;
            e.confirm(_.getString("CONFIRM_CLEAR_QUEUE")) && (this.collection.reset(), GS.tracking.trackEvent("queue", "clear"))
        },
        saveEdit: function (e) {
            this.editModeOff(), GS.tracking.trackEvent("queue", "edit_save")
        },
        deleteRow: function (e) {
            var t = $(e.target).parent(),
                n = this.getModelForRow(t);
            this.collection.remove(n)
        },
        moveRowUp: function (e) {
            var t = $(e.target).parent().parent(),
                n = this.getModelForRow(t);
            this.collection.moveUp(n)
        },
        moveRowDown: function (e) {
            var t = $(e.target).parent().parent(),
                n = this.getModelForRow(t);
            this.collection.moveDown(n)
        }
    }),
        r = Backbone.View.extend({
            template: GS.h.getTemplate("now_playing/now_playing.ejs"),
            className: "now-playing-view",
            initialize: function (e) {
                e = e || {}, GS.audio.bind("player:set-model", this.setImage, this), GS.audio.bind("player:set-model", this.resetState, this), GS.audio.bind("player:timeupdate", this.update, this), e.song && this.setSong(e.song)
            },
            setSong: function (e) {
                this.song && this.song.unbind("change", this.gotSong), e && (this.song = e, this.song.bind("change", this.gotSong, this), this.$progressContainer && this.$progressContainer.addClass("hidden"))
            },
            gotSong: function (e) {
                this.$playNow.removeClass("hidden"), this.setImage({
                    model: e
                })
            },
            destroy: function () {
                return GS.audio.unbind("player:set-model", this.setImage), GS.audio.unbind("player:set-model", this.resetState), GS.audio.unbind("player:timeupdate", this.update), this.song && (this.song.unbind("change", this.gotSong), this.song = null), this.unbind(), this.remove(), null
            },
            render: function () {
                this.$el = $(this.el);
                var e = GS.audio.getProgress(),
                    t = GS.audio.getLoaded();
                return this.$el.html(this.template({
                    hasSong: !! this.song,
                    songProgress: e.map(GS.h.prettyDuration),
                    percentage: this.getProgressPercentage.apply(this, e),
                    loaded: this.getProgressPercentage.apply(this, t),
                    songImage: this.song ? null : this.getImageFromSong()
                })), this.$progressContainer = this.$(".progress"), this.$playNow = this.$(".song-page-play-now"), this.$played = this.$(".now-playing-played"), this.$total = this.$(".now-playing-total"), this.$progress = this.$(".progressbar-progress"), this.$loaded = this.$(".progressbar-loaded"), this.$image = this.$(".now-playing-image img"), this.song && this.resetState(), this
            },
            reset: function () {
                this.$playNow.addClass("hidden"), this.$progressContainer.removeClass("hidden"), this.setImage()
            },
            getProgressPercentage: function (e, t) {
                var n = ~~ (e / (t / 100));
                return n > 100 && (n = 100), n
            },
            setState: function (e) {
                e = e || {
                    current: 0,
                    loaded: 0,
                    total: 0
                }, this.$played.html(GS.h.prettyDuration(e.current)), this.$total.html(GS.h.prettyDuration(e.total));
                var t = this.getProgressPercentage(e.current, e.total),
                    n = this.getProgressPercentage(e.loaded, e.total);
                this.$progress.css("width", t + "%"), n !== 100 && this.$loaded.css("width", n + "%")
            },
            getImageFromSong: function (e) {
                return e = e || this.collection.current(), e ? e.get("coverURL500") : null
            },
            setImage: function (e) {
                e = e || {};
                var t = this.getImageFromSong(e.model);
                t ? this.$image.attr("src", t).removeClass("hidden") : this.$image.addClass("hidden").removeAttr("src")
            },
            update: function (e) {
                this.setState({
                    current: e.progress[0],
                    loaded: e.loaded[0],
                    total: e.progress[1]
                })
            },
            resetState: function () {
                this.setState()
            },
            events: {
                "click .song-page-play-now": "playNow"
            },
            playNow: function (e) {
                this.collection.playNow(this.song), GS.audio.playNow(), this.$playNow.addClass("hidden"), this.$progressContainer.removeClass("hidden")
            }
        }),
        i = Backbone.View.extend({
            el: $("#queue"),
            templates: {
                queue: GS.h.getTemplate("now_playing/queue.ejs"),
                header: GS.h.getTemplate("now_playing/queue_header.ejs")
            },
            initialize: function (e) {
                GS.audio.bind("player:set-model", this.loading, this), GS.audio.bind("player:started", this.loaded, this), GS.audio.bind("player:play", this.playing, this), GS.audio.bind("player:pause", this.paused, this), GS.audio.bind("player:ended", this.paused, this), GS.audio.bind("player:stopped", this.idle, this), this._rendered = !1
            },
            render: function (e) {
                e = e || {}, this.el.append(this.templates.queue({
                    loading: this._loading,
                    playing: this._playing
                })), this.$header = this.$("#queue-header"), this.$switch = this.$(".popover-switch"), this.$content = this.$(".popover-content"), this.$playPause = this.$(".queue-actions-paused"), this.$actions = this.$(".queue-actions"), GS.audio.bind("player:started", this.updateHeader, this), GS.audio.bind("player:ended", this.removeSongHeader, this), GS.audio.bind("player:error", this.removeSongHeader, this), GS.audio.bind("player:stopped", this.removeSongHeader, this), this._rendered = !0
            },
            renderSongHeader: function (e) {
                this.headerEl = $(this.templates.header({
                    song: e.toJSON()
                })), this.$header.append(this.headerEl)
            },
            removeSongHeader: function () {
                this.headerEl && this.headerEl.remove()
            },
            updateHeader: function (e) {
                if (!e.model) return;
                this.removeSongHeader(), this.renderSongHeader(e.model)
            },
            loading: function () {
                this._loading = !0, this.$playPause && this.$playPause.addClass("queue-actions-loading")
            },
            loaded: function () {
                this._loading = !1, this.$playPause && this.$playPause.removeClass("queue-actions-loading")
            },
            playing: function () {
                this._playing = !0, this.$playPause && this.$playPause.addClass("queue-actions-playing")
            },
            paused: function () {
                this._playing = !1, this.$playPause && this.$playPause.removeClass("queue-actions-playing")
            },
            idle: function () {
                this._playing = !1, this._loading = !1, this.$playPause && this.$playPause.removeClass("queue-actions-playing").removeClass("queue-actions-loading")
            },
            show: function (e) {
                e = e || {}, this._rendered || this.render(), this.removeSongHeader();
                var t = this.collection.current();
                !this._loading && t && this.renderSongHeader(t), this.song = null, this.$actions.removeClass("hidden"), e.nowPlaying ? (this.$switch.removeClass("popover-switch-queue").addClass("popover-switch-nowplaying"), this.list && (this.list = this.list.destroy()), this.nowPlaying ? e.song ? this.nowPlaying.setSong(e.song) : this.nowPlaying.reset() : (this.nowPlaying = new r({
                    collection: this.collection,
                    song: e.song
                }), this.$content.append(this.nowPlaying.render().el), GS.views.header.updateTitle(_.getString("NOW_PLAYING"))), e.song && (this.song = e.song, GS.views.spinner.show(_.getString("LOADING_SONG")), this.loading(), this.song.bind("change", this.showSongPage, this), this.$actions.addClass("hidden"))) : (this.$switch.removeClass("popover-switch-nowplaying").addClass("popover-switch-queue"), this.nowPlaying && (this.nowPlaying = this.nowPlaying.destroy()), this.list = new n({
                    collection: this.collection
                }), this.$content.append(this.list.render().el), GS.views.header.updateTitle(_.getString("QUEUE"))), this.el.addClass("shown"), this._shown = !0, GS.views.app.trigger("app:navigated", {
                    item: "queue"
                }), GS.views.scroller.trigger("scroller:hide-addressbar")
            },
            showSongPage: function (e) {
                this.removeSongHeader(), this.renderSongHeader(e), this.loaded(), GS.views.spinner.hide(), this.song.unbind("change", this.showSongPage)
            },
            hide: function () {
                if (!this._shown) return;
                this.list ? this.list = this.list.destroy() : this.nowPlaying && (this.nowPlaying = this.nowPlaying.destroy()), this.removeSongHeader(), this.el.removeClass("shown"), this._shown = !1
            },
            events: {
                "click .popover-back": "close",
                "click .popover-switch": "switchViews",
                "click .queue-actions-prev": "prev",
                "click .queue-actions-paused": "play",
                "click .queue-actions-next": "next"
            },
            close: function (t) {
                GS.routers.app._savedHash ? e.location.hash = GS.routers.app._savedHash : GS.h.navigate("/")
            },
            switchViews: function (e) {
                if (this.list) {
                    GS.h.navigate("/now-playing");
                    return
                }
                if (this.nowPlaying) {
                    GS.h.navigate("/queue");
                    return
                }
            },
            prev: function (e) {
                if (this.collection.length === 0) return;
                this.collection.prev() && (GS.audio.playNow(), GS.tracking.trackEvent("queue", "previous_song"))
            },
            play: function (e) {
                if (this._loading || this.collection.length === 0) return;
                var t = this.collection.current();
                t ? GS.audio.pauseResume() : this.next(), GS.tracking.trackEvent("queue", "pause_resume")
            },
            next: function () {
                if (this.collection.length === 0) return;
                this.collection.next() && (GS.audio.playNow(), GS.tracking.trackEvent("queue", "next_song"))
            }
        });
    e.GS.views.queue = new i({
        collection: GS.models.queue
    })
}(this),
function (e, t) {
    var n = Backbone.Router.extend({
        initialize: function () {
            this.route("*unmatched", "unmatched", function (e) {
                if (!e) return;
                /^\!/.test(e) ? this.navigate("!/", !0) : this.navigate("!" + e, !0)
            }), this.route("", "home", this.home), this.route("!/", "home", this.home), this.route("!/search", "search", this.search), this.route("!/search/*query", "searchResults", this.searchResults), this.route("!/search/:songs/*query", "searchSongs", this.searchByType), this.route("!/search/:albums/*query", "searchAlbums", this.searchByType), this.route("!/search/:playlists/*query", "searchPlaylists", this.searchByType), this.route("!/music/stations", "stations", this.stations), this.route("!/popular", "popular", this.popular), this.route("!/login", "login", this.login), this.route("!/forgot", "forgot", this.forgotPass), this.route("!/signup", "signup", this.signup), this.route("!/user/*name/:id", "userProfile", this.userProfile), this.route("!/user/*name/:id/", "userProfile", this.userProfile), this.route("!/user/*name/:id/collection", "userCollection", this.userCollection), this.route("!/user/*name/:id/music", "userCollection", this.userCollection), this.route("!/user/*name/:id/favorites", "userFavorites", this.userFavorites), this.route("!/user/*name/:id/playlists", "userPlaylists", this.userPlaylists), this.route("!/user/*name/:id/following", "userFollowing", this.userFollowing), this.route("!/playlist/*name/:id", "playlist", this.playlist), this.route("!/playlist/*name/:id/", "playlist", this.playlist), this.route("!/album/*name/:id", "album", this.album), this.route("!/album/*name/:id/", "album", this.album), this.route("!/queue", "queue", this.queue), this.route("!/now-playing", "now-playing", this.nowPlaying), this.route("!/s/*name/:token", "song", this.songPage), this.route("!/mobile", "mobile", this.mobile), this.route("!/lang/:code", "lang", function (e) {
                GS.h.changeLanguage(e).fail(function (t, n, r) {
                    console.log("Can not switch to `%s`, xhr status `%s`", e, t.status)
                }).always(function () {
                    GS.h.navigate("/")
                })
            }), this.bind("all", function (e) {
                var t = document.location.pathname + document.location.search + decodeURIComponent(document.location.hash);
                GS.tracking.track(t);
                var n = e.split(":")[1];
                n = n.replace(/^user/, "").toLowerCase(), GS.guts.log("loadPage", {
                    destinationPageType: n
                }).begin({
                    currentPageType: n
                })
            })
        },
        route: function (e, t, n) {
            var r = {
                queue: !0,
                "now-playing": !0,
                song: !0
            };
            r[t] || (n = function (e) {
                return function () {
                    var t = [].slice.call(arguments, 0),
                        n = this.prepare.apply(this, t);
                    n || e.apply(this, t)
                }
            }(n)), Backbone.Router.prototype.route.call(this, e, t, n)
        },
        prepare: function () {
            var t = e.location.hash;
            return GS.views.queue.hide(), t === this._savedHash ? (GS.views.app.show(), !0) : (this._savedHash = t, GS.views.app.destroyPage(), !1)
        },
        home: function () {
            GS.views.app.renderPage(new GS.views.Home({
                collection: GS.models.recent
            }))
        },
        search: function () {
            GS.views.app.renderPage(new GS.views.SearchForm)
        },
        searchResults: function (e) {
            var t = GS._cache.search,
                n;
            t && e === t.query ? n = t : (n = new GS.models.Search({}, {
                query: e
            }), GS._cache.search = n, n.fetch()), GS.views.app.renderPage(new GS.views.SearchResults({
                model: n,
                query: e
            }))
        },
        searchByType: function (e, t) {
            var n = GS._cache.search,
                r, i;
            n && t === n.query ? i = n : (i = new GS.models.Search({}, {
                by: e,
                query: t
            }), i.fetch()), r = i[e], e === "songs" ? this._searchSongs(i, r) : e === "albums" ? this._searchAlbums(i, r) : e === "playlists" && this._searchPlaylist(i, r)
        },
        _searchSongs: function (e, t) {
            GS.views.app.renderPage(new GS.views.SongsResults({
                model: e,
                collection: t
            }))
        },
        _searchAlbums: function (e, t) {
            GS.views.app.renderPage(new GS.views.AlbumsResults({
                model: e,
                collection: t
            }))
        },
        _searchPlaylist: function (e, t) {
            GS.views.app.renderPage(new GS.views.PlaylistsResults({
                model: e,
                collection: t
            }))
        },
        stations: function () {
            GS.views.app.renderPage(new GS.views.StationsList({
                collection: GS.models.stations
            }))
        },
        popular: function () {
            var e = new GS.views.Popular({
                collection: GS.models.popular
            });
            GS.views.app.renderPage(e), GS.models.popular.loaded() ? e.render() : GS.models.popular.fetch({
                parameters: {
                    type: "daily"
                }
            })
        },
        login: function () {
            GS.models.session.authenticated() ? GS.h.navigate(GS.models.session.get("baseURL")) : GS.views.app.renderPage(new GS.views.Login({
                model: GS.models.session
            }))
        },
        signup: function () {
            GS.models.session.authenticated() ? GS.h.navigate(GS.models.session.get("baseURL")) : GS.views.app.renderPage(new GS.views.SignUp({
                check: GS.models.checkUser
            }))
        },
        forgotPass: function () {
            GS.views.app.renderPage(new GS.views.ForgotPass({
                model: GS.models.restorePass
            }))
        },
        userProfile: function (t, n) {
            var r, i = GS._cache.user;
            n = parseInt(n, 10), GS.models.session.isYou(n) ? r = GS.models.session : i && i.id === n ? r = i : (r = new GS.models.User({
                userID: n
            }), e.GS._cache.user = r, r.fetch()), GS.views.app.renderPage(new GS.views.Profile({
                model: r
            })), GS.models.session.isYou(n) || r.fetchMusic(), r.fetchOther()
        },
        userCollection: function (e, t) {
            var n, r = GS._cache.user;
            t = parseInt(t, 10), GS.models.session.isYou(t) ? n = GS.models.session.library : r && r.id === t ? n = r.library : n = new GS.models.Library([], {
                userID: t
            }), GS.views.app.renderPage(new GS.views.Library({
                collection: n
            })), !n.loaded() && !GS.models.session.isYou(t) && n.fetch()
        },
        userFavorites: function (e, t) {
            var n, r = GS._cache.user;
            t = parseInt(t, 10), GS.models.session.isYou(t) ? n = GS.models.session.favorites : r && r.id === t ? n = r.favorites : n = new GS.models.Favorites([], {
                userID: t
            }), GS.views.app.renderPage(new GS.views.Favorites({
                collection: n
            })), !n.loaded() && !GS.models.session.isYou(t) && n.fetch()
        },
        userPlaylists: function (e, t) {
            var n, r = GS._cache.user;
            t = parseInt(t, 10), GS.models.session.isYou(t) ? n = GS.models.session.playlists : r && r.id === t ? n = r.playlists : n = new GS.models.UserPlaylists([], {
                userID: t
            }), GS.views.app.renderPage(new GS.views.UserPlaylists({
                collection: n
            })), n.loaded() || n.fetch()
        },
        userFollowing: function (e, t) {
            var n, r = GS._cache.user;
            t = parseInt(t, 10), GS.models.session.isYou(t) ? n = GS.models.session.following : r && r.id === t ? n = r.following : n = new GS.models.Following([], {
                userID: t
            }), GS.views.app.renderPage(new GS.views.Following({
                collection: n
            })), n.loaded() || n.fetch()
        },
        playlist: function (e, t) {
            var n, r = GS._cache.user,
                i = GS.models.session;
            t = parseInt(t, 10), i.playlists && i.playlists.get(t) ? n = i.playlists.get(t) : r && r.playlists.get(t) ? n = r.playlists.get(t) : n = new GS.models.Playlist({
                PlaylistID: t
            }), GS.views.app.renderPage(new GS.views.PlaylistPage({
                model: n
            })), n.songs.loaded() || n.fetch()
        },
        album: function (e, t) {
            var n = new GS.models.Album({
                AlbumID: t
            });
            n.fetch(), GS.views.app.renderPage(new GS.views.AlbumPage({
                model: n
            }))
        },
        queue: function () {
            GS.views.app.hide(), GS.views.queue.show()
        },
        nowPlaying: function () {
            GS.views.app.hide(), GS.views.queue.show({
                nowPlaying: !0
            })
        },
        songPage: function (e, t) {
            GS.views.app.hide();
            var n = new GS.models.Token;
            GS.views.queue.show({
                nowPlaying: !0,
                song: n
            }), n.fetch({
                parameters: {
                    token: t
                }
            })
        },
        mobile: function () {
            GS.h.navigate("/")
        }
    });
    e.GS.routers.app = new n
}(this),
function (e, t) {
    function n() {
        function e(e) {
            var t = document.createElement("link");
            return t.rel = "stylesheet", t.type = "text/css", t.href = e, t
        }
        var t, n = document.getElementsByTagName("head")[0];
        GS.h.isRetina() ? (t = GS.config.runMode === "dev" ? "/stylesheets/images_hd.css" : "/build/imgs_hd.min.css", n.appendChild(e(t))) : (t = GS.config.runMode === "dev" ? "/stylesheets/images_sd.css" : "/build/imgs_sd.min.css", n.appendChild(e(t)))
    }

    function r() {
        var t = e.navigator;
        return t.language || t.browserLanguage || t.systemLanguage || t.userLanguage
    }
    e.GS.tracking = {
        comscore: function () {
            return e._comscore = e._comscore || [], e._comscore
        },
        gaq: function () {
            return e._gaq = e._gaq || [], e._gaq
        },
        track: function (e) {
            if (GS.config.runMode === "dev") return;
            this.gaq().push(["_trackPageview", e]), this.comscore().push({
                c1: "2",
                c2: "8187464",
                c3: "",
                c4: e
            })
        },
        trackEvent: function (e, t) {
            if (GS.config.runMode === "dev") return;
            this.gaq().push(["_trackEvent", e, t]), this.comscore().push({
                c1: "2",
                c2: "8187464",
                c3: "",
                c4: "",
                c5: t,
                c6: e
            })
        }
    }, e.addEventListener("DOMContentLoaded", function () {
        n(), Backbone.history.start();
        var t = (e.GS.config.lang || r() || "en").substring(0, 2);
        t != "en" && e.GS.h.changeLanguage(t)
    }, !1)
}(this)