"use strict";$(".navCen a").each(function(c,o){$(o).mouseover(function(){$(".content .secondary").each(function(o,n){c==o&&($(n).show(),$(".trigon").each(function(o,n){c==o&&(console.log(n),$(n).show())}))})}),$(o).mouseout(function(){$(".content .secondary").each(function(e,o){c==e&&($(o).hide(),$(".trigon").hide()),$(o).mouseover(function(){$(o).show(),$(".trigon").each(function(o,n){e==o&&(console.log(n),$(n).show())})}),$(o).mouseout(function(){$(o).hide(),$(".trigon").hide()})})})});