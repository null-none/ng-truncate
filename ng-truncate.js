angular.module('ngTruncate', [])

.filter('truncate', function () {
    return function (text, truncateLength, end, fullWords) {
        if (!truncateLength || typeof truncateLength !== 'number') return;

        end = end || '...';

        if (text.length < truncateLength) return text;

        if (fullWords) {
            var prevNewStr, newStr = '',
                strArr = text.split(' ');

            for (var i=0; i<strArr.length; i++) {
                prevNewStr = newStr;
                newStr += (newStr ? ' ' : '') + strArr[i];

                if ((newStr + end).length > truncateLength)
                    return prevNewStr + end;
            }
        } else {
            return text.substring(0, truncateLength - end.length).trim() + end;
        }
    };
});
