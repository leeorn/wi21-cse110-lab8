const formatVolumeIconPath = require('../assets/scripts/main');
//./assets/media/icons/volume-level-${iconLevel}.svg

describe('test the function, formatVolumeIconPath, showes correct image', ()=>{
    test('case 1 - higher than 66', ()=>{
        expect(formatVolumeIconPath(100)).toBe('./assets/media/icons/volume-level-3.svg');
    });
    test('case 2 - between 66 to 33', ()=>{
        expect(formatVolumeIconPath(60)).toBe('./assets/media/icons/volume-level-2.svg');
    });
    test('case 3 - less than 33, more than 0', ()=>{
        expect(formatVolumeIconPath(30)).toMatch('./assets/media/icons/volume-level-1.svg');
    });
    test('case 4 - none of the above', ()=>{
        expect(formatVolumeIconPath(0)).toContain('./assets/media/icons/volume-level-0.svg');
    });
});

