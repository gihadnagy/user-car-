(function($){"use strict";$('.departments-menu>ul>li>a').on('mouseenter',function(event){event.preventDefault();$(".departments-menu>ul>li>a").next().removeClass("open");$(this).next().addClass('open');$(document).on('click',function(){$(".mega-menu-content").removeClass('open')});});$(".mega-menu-content").on('click',function(event){event.stopPropagation();});})(jQuery);