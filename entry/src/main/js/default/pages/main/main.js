import router from '@system.router'

export default {
    data: {
        currentPageIndex: 0, /*当前页面位置*/
        tab0selected: true, /**/
        tab1selected: false,
        tab2selected: false,
        tab3selected: false,
        tab4selected: false
    },
    onTabSelected(e) {
        if (Number(e.detail.position) != this.currentPageIndex) {
            this.currentPageIndex = Number(e.detail.position);
            console.info("onTabSelected:" + e.detail.position);
        } else {
            console.info("onTabReSelected:" + e.detail.position);
            return;
        }

        this.change2Tab(); //切换按钮
        this.change2Page(); //切换页面
    },
    onPageChange(e) {
        this.currentPageIndex = Number(e.index);

        this.change2Tab(); //切换按钮
    },
    change2Page() {
        console.info("change2Page:" + this.currentPageIndex);

        this.$element('pageSwiper').swipeTo({
            index: this.currentPageIndex,
        }); //切换页面
    },
    change2Tab() {
        console.info("change2Tab:" + this.currentPageIndex);
        for (var i = 0; i < 5; i++) {
            var param = "tab" + i + "selected";
            if (this.currentPageIndex == i) {
                //选中位置
                this[param] = true;
            } else {
                //非选中位置
                this[param] = false;
            }
        }
    }
}
