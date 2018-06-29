!function(n){function t(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};t.m=n,t.c=a,t.i=function(n){return n},t.d=function(n,a,e){t.o(n,a)||Object.defineProperty(n,a,{configurable:!1,enumerable:!0,get:e})},t.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(a,"a",a),a},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar margin = { top: 10, right: 30, bottom: 30, left: 60 };\nvar width = 9600 - margin.left - margin.right;\nvar height = 500 - margin.top - margin.bottom;\n\nvar $name = d3.select('body').append('p').attr('class', 'name');\n\nvar $svg = d3.select('body').append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom);\n\nvar $g = $svg.append('g').attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');\n\nfunction setupChart(data) {\n  var _data = _slicedToArray(data, 2),\n      peopleData = _data[0],\n      pageviewData = _data[1];\n\n  var person = peopleData[34];\n  var pageviews = pageviewData.filter(function (d) {\n    return d.pageid === person.pageid;\n  });\n  console.log({ person: person, pageviews: pageviews });\n\n  $name.text(person.display);\n\n  var $axisX = $g.append('g').attr('class', 'g-axis axis--x');\n  var $axisY = $g.append('g').attr('class', 'g-axis axis--y');\n  var $vis = $g.append('g').attr('class', 'g-vis');\n  var $path = $vis.append('path').attr('class', 'pageviews');\n\n  var scaleX = d3.scaleTime().domain(d3.extent(pageviews, function (d) {\n    return d.date;\n  })).range([0, width]);\n\n  var scaleY = d3.scaleLinear().domain([0, person.max_views]).range([height, 0]);\n\n  var line = d3.line().x(function (d) {\n    return scaleX(d.date);\n  }).y(function (d) {\n    return scaleY(d.views);\n  }).defined(function (d) {\n    return d.date;\n  });\n\n  $path.attr('d', line(pageviews));\n\n  $vis.selectAll('circle').data(pageviews).enter().append('circle').attr('cx', function (d) {\n    return scaleX(d.date);\n  }).attr('cy', function (d) {\n    return scaleY(d.views);\n  }).attr('r', 2);\n\n  var axisY = d3.axisLeft(scaleY);\n  $axisY.call(axisY);\n\n  var axisX = d3.axisBottom(scaleX);\n  $axisX.call(axisX).attr('transform', 'translate(0, ' + height + ')');\n}\n\nfunction convertTimestampToDate(timestamp) {\n  var year = timestamp.substring(0, 4);\n  var month = +timestamp.substring(4, 6) - 1;\n  var date = timestamp.substring(6, 8);\n  return new Date(year, month, date);\n}\n\nfunction loadPeopleData() {\n  return new Promise(function (resolve, reject) {\n    d3.csv('data/people.csv', function (d) {\n      return _extends({}, d, {\n        max_views: +d.max_views,\n        max_percent_traffic: +d.max_percent_traffic,\n        thumbnail_width: +d.thumbnail_width,\n        thumbnail_height: +d.thumbnail_height,\n        year_of_birth: +d.year_of_birth,\n        year_of_death: +d.year_of_death\n      });\n    }).then(resolve).catch(reject);\n  });\n}\n\nfunction loadPageviewsData() {\n  return new Promise(function (resolve, reject) {\n    d3.csv('data/pageviews.csv', function (d) {\n      return _extends({}, d, {\n        date: convertTimestampToDate(d.timestamp),\n        views: +d.views,\n        percent_traffic: +d.percent_traffic\n      });\n    }).then(resolve).catch(reject);\n  });\n}\n\nfunction init() {\n  var p = [loadPeopleData(), loadPageviewsData()];\n  Promise.all(p).then(setupChart).catch(console.error);\n}\n\ninit();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zY3JpcHQuanM/OWE5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYXJnaW4gPSB7IHRvcDogMTAsIHJpZ2h0OiAzMCwgYm90dG9tOiAzMCwgbGVmdDogNjAgfTtcbmNvbnN0IHdpZHRoID0gOTYwMCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuY29uc3QgaGVpZ2h0ID0gNTAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbmNvbnN0ICRuYW1lID0gZDNcbiAgLnNlbGVjdCgnYm9keScpXG4gIC5hcHBlbmQoJ3AnKVxuICAuYXR0cignY2xhc3MnLCAnbmFtZScpO1xuXG5jb25zdCAkc3ZnID0gZDNcbiAgLnNlbGVjdCgnYm9keScpXG4gIC5hcHBlbmQoJ3N2ZycpXG4gIC5hdHRyKCd3aWR0aCcsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSk7XG5cbmNvbnN0ICRnID0gJHN2Z1xuICAuYXBwZW5kKCdnJylcbiAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYCk7XG5cbmZ1bmN0aW9uIHNldHVwQ2hhcnQoZGF0YSkge1xuICBjb25zdCBbcGVvcGxlRGF0YSwgcGFnZXZpZXdEYXRhXSA9IGRhdGE7XG4gIGNvbnN0IHBlcnNvbiA9IHBlb3BsZURhdGFbMzRdO1xuICBjb25zdCBwYWdldmlld3MgPSBwYWdldmlld0RhdGEuZmlsdGVyKGQgPT4gZC5wYWdlaWQgPT09IHBlcnNvbi5wYWdlaWQpO1xuICBjb25zb2xlLmxvZyh7IHBlcnNvbiwgcGFnZXZpZXdzIH0pO1xuXG4gICRuYW1lLnRleHQocGVyc29uLmRpc3BsYXkpO1xuXG4gIGNvbnN0ICRheGlzWCA9ICRnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ctYXhpcyBheGlzLS14Jyk7XG4gIGNvbnN0ICRheGlzWSA9ICRnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ctYXhpcyBheGlzLS15Jyk7XG4gIGNvbnN0ICR2aXMgPSAkZy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdnLXZpcycpO1xuICBjb25zdCAkcGF0aCA9ICR2aXMuYXBwZW5kKCdwYXRoJykuYXR0cignY2xhc3MnLCAncGFnZXZpZXdzJyk7XG5cbiAgY29uc3Qgc2NhbGVYID0gZDNcbiAgICAuc2NhbGVUaW1lKClcbiAgICAuZG9tYWluKGQzLmV4dGVudChwYWdldmlld3MsIGQgPT4gZC5kYXRlKSlcbiAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbiAgY29uc3Qgc2NhbGVZID0gZDNcbiAgICAuc2NhbGVMaW5lYXIoKVxuICAgIC5kb21haW4oWzAsIHBlcnNvbi5tYXhfdmlld3NdKVxuICAgIC5yYW5nZShbaGVpZ2h0LCAwXSk7XG5cbiAgY29uc3QgbGluZSA9IGQzXG4gICAgLmxpbmUoKVxuICAgIC54KGQgPT4gc2NhbGVYKGQuZGF0ZSkpXG4gICAgLnkoZCA9PiBzY2FsZVkoZC52aWV3cykpXG4gICAgLmRlZmluZWQoZCA9PiBkLmRhdGUpO1xuXG4gICRwYXRoLmF0dHIoJ2QnLCBsaW5lKHBhZ2V2aWV3cykpO1xuXG4gICR2aXNcbiAgICAuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgIC5kYXRhKHBhZ2V2aWV3cylcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgLmF0dHIoJ2N4JywgZCA9PiBzY2FsZVgoZC5kYXRlKSlcbiAgICAuYXR0cignY3knLCBkID0+IHNjYWxlWShkLnZpZXdzKSlcbiAgICAuYXR0cigncicsIDIpO1xuXG4gIGNvbnN0IGF4aXNZID0gZDMuYXhpc0xlZnQoc2NhbGVZKTtcbiAgJGF4aXNZLmNhbGwoYXhpc1kpO1xuXG4gIGNvbnN0IGF4aXNYID0gZDMuYXhpc0JvdHRvbShzY2FsZVgpO1xuICAkYXhpc1guY2FsbChheGlzWCkuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCAke2hlaWdodH0pYCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUaW1lc3RhbXBUb0RhdGUodGltZXN0YW1wKSB7XG4gIGNvbnN0IHllYXIgPSB0aW1lc3RhbXAuc3Vic3RyaW5nKDAsIDQpO1xuICBjb25zdCBtb250aCA9ICt0aW1lc3RhbXAuc3Vic3RyaW5nKDQsIDYpIC0gMTtcbiAgY29uc3QgZGF0ZSA9IHRpbWVzdGFtcC5zdWJzdHJpbmcoNiwgOCk7XG4gIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRQZW9wbGVEYXRhKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGQzLmNzdignZGF0YS9wZW9wbGUuY3N2JywgZCA9PiAoe1xuICAgICAgLi4uZCxcbiAgICAgIG1heF92aWV3czogK2QubWF4X3ZpZXdzLFxuICAgICAgbWF4X3BlcmNlbnRfdHJhZmZpYzogK2QubWF4X3BlcmNlbnRfdHJhZmZpYyxcbiAgICAgIHRodW1ibmFpbF93aWR0aDogK2QudGh1bWJuYWlsX3dpZHRoLFxuICAgICAgdGh1bWJuYWlsX2hlaWdodDogK2QudGh1bWJuYWlsX2hlaWdodCxcbiAgICAgIHllYXJfb2ZfYmlydGg6ICtkLnllYXJfb2ZfYmlydGgsXG4gICAgICB5ZWFyX29mX2RlYXRoOiArZC55ZWFyX29mX2RlYXRoXG4gICAgfSkpXG4gICAgICAudGhlbihyZXNvbHZlKVxuICAgICAgLmNhdGNoKHJlamVjdCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkUGFnZXZpZXdzRGF0YSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBkMy5jc3YoJ2RhdGEvcGFnZXZpZXdzLmNzdicsIGQgPT4gKHtcbiAgICAgIC4uLmQsXG4gICAgICBkYXRlOiBjb252ZXJ0VGltZXN0YW1wVG9EYXRlKGQudGltZXN0YW1wKSxcbiAgICAgIHZpZXdzOiArZC52aWV3cyxcbiAgICAgIHBlcmNlbnRfdHJhZmZpYzogK2QucGVyY2VudF90cmFmZmljXG4gICAgfSkpXG4gICAgICAudGhlbihyZXNvbHZlKVxuICAgICAgLmNhdGNoKHJlamVjdCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBwID0gW2xvYWRQZW9wbGVEYXRhKCksIGxvYWRQYWdldmlld3NEYXRhKCldO1xuICBQcm9taXNlLmFsbChwKVxuICAgIC50aGVuKHNldHVwQ2hhcnQpXG4gICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xufVxuXG5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2NyaXB0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);