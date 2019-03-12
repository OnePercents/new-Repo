function transformCss(node, name, value) {
        console.log(aaa)
        if (!node.transform) {
            node.transform = {}
        }
        if (arguments.length > 2) {
            node.transform[name] = value;
            var result = '';
            for (var item in node.transform) {
                switch (item) {
                    case 'rotate':
                    case 'skew':
                    case 'skewX':
                    case 'skewY':
                    case 'skewZ':
                        result += item + "(" + node.transform[item] + "deg)"
                        break;
                    case 'scale':
                    case 'scaleX':
                    case 'scaleY':
                    case 'scaleZ':
                        result += item + "(" + node.transform[item] + ")"
                        break;
                    case 'translate':
                    case 'translateX':
                    case 'translateY':
                    case 'translateZ':
                        result += item + "(" + node.transform[item] + "px)"
                        break;
                }
            }
            node.style.transform = result;
        } else {
            if (typeof node.transform[name] == 'undefined') {
                if (name == 'scale' || name == 'scaleX' || name == 'scaleY') {
                    value = 1;
                } else {
                    value = 0;
                }
            } else {
                value = node.transform[name];
            }
            return value;
        }
    }
