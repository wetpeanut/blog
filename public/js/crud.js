/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ({

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),

/***/ 44:
/***/ (function(module, exports) {


$(function () {

        $(document).on('click', '#add-modal', function () {
                console.log("adasdsadasd");
        });

        $.ajaxSetup({
                headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
        });

        $("#btn-save").click(function () {
                $.ajax({
                        type: 'POST',
                        url: '/addPost',
                        data: {

                                'title': $("#title").val(),
                                'post': $("#post").val()
                        },
                        success: function success(data) {
                                if (data.errors) {
                                        $('.error').removeClass('hidden');
                                        $('.error').text(data.errors.name);
                                } else {
                                        $('.error').remove();
                                        $('#table_post').append("<tr class='item" + data.id + "' data-><td>" + data.id + "</td><td>" + data.title + "</td> <td>" + data.post + "</td> <td><a  data-target='#myModal' data-toggle='modal'class='btn btn-warning'>Edit</a></td><td><button class='btn btn-danger' type='submit' id='btn-delete'>DELETE</button></td></tr>");
                                }
                        }
                });
                $("#title").val('');
                $("#post").val('');

                $("#myModal").modal('toggle');
        });

        $(document).on('click', '#btn-update', function () {

                $("#myModal").find(".modal-title").html("Update");
                var title = $(this).closest('tr').find('td[data-crud="title"]').html();
                var post = $(this).closest('tr').find('td[data-crud="post"]').html();
                var id = $(this).closest('tr').find('td[data-crud="id"]').html();
                console.log(id);
                $('#title').val(title);
                $('#post').val(post);
        });

        $(document).on('click', '#btn-delete', function () {

                var id = $(this).closest('tr').find('td[data-crud="id"]').html();
                $("#deleteModal").attr("data-crud", id);
                console.log(id);
        });

        $('.modal-footer').on('click', '.delete', function () {

                var id = $("#deleteModal").attr("data-crud");
                console.log(id);
                $.ajax({
                        type: 'POST',
                        url: '/destroy',
                        data: {

                                'id': id
                        },
                        success: function success(data) {
                                if (data.errors) {} else {
                                        console.log(id);
                                }
                        }

                });
        });
});

/***/ })

/******/ });