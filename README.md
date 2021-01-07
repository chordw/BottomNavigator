# BottomNavigator

#### 介绍
一个 HarmonyOS JS 框架下，底部导航栏的一种实现方式。欢迎指正！

#### 软件架构
软件架构说明


#### 安装教程

1.  xxxx
2.  xxxx
3.  xxxx

#### 使用说明

License 问题不是很了解，如有问题，欢迎联系我！

1.  下载代码
2.  复制/common/component/下 代码文件到所需项目对应目录
3.  引入自定义组件：在需要使用底部导航页面（通常是应用主页如main.hml） 头部<element name='bottomTab' src='../../common/component/bottom_tab.hml'></element>
4.  布局：
    ```
        //main.hml 中代码
        <div class="containerBottom">
        <bottomtab @on-child-click="onTabSelected" index="0" p-selected="{{tab0selected}}" title="页面1"
                icon-selected="/common/tab_0_selected.png" icon-normal="/common/tab_0_normal.png"></bottomtab>
        <bottomtab @on-child-click="onTabSelected" index="1" p-selected="{{tab1selected}}" title="页面2"
                icon-selected="/common/tab_0_selected.png" icon-normal="/common/tab_0_normal.png"></bottomtab>
        <bottomtab @on-child-click="onTabSelected" index="2" p-selected="{{tab2selected}}" title="页面3"
                icon-selected="/common/tab_0_selected.png" icon-normal="/common/tab_0_normal.png"></bottomtab>
        <bottomtab @on-child-click="onTabSelected" index="3" p-selected="{{tab3selected}}" title="页面4"
                icon-selected="/common/tab_0_selected.png" icon-normal="/common/tab_0_normal.png"></bottomtab>
        <bottomtab @on-child-click="onTabSelected" index="4" p-selected="{{tab4selected}}" title="页面5"
                icon-selected="/common/tab_0_selected.png" icon-normal="/common/tab_0_normal.png"></bottomtab>
    </div>
    ```
5.  js 代码

    ```
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
    change2Page(data) {
        console.info("change2Page:" + this.currentPageIndex);

        this.$element('pageSwiper').swipeTo({
            index: this.currentPageIndex,
        }); //切换页面
    },
    change2Tab() {
        console.info("change2Tab:" + this.currentPageIndex);
        switch (this.currentPageIndex) {
            case 0:
            this.tab0selected = true;
            this.tab1selected = false;
            this.tab2selected = false;
            this.tab3selected = false;
            this.tab4selected = false;
            break;
            case 1:
            this.tab0selected = false;
            this.tab1selected = true;
            this.tab2selected = false;
            this.tab3selected = false;
            this.tab4selected = false;
            break;
            case 2:
            this.tab0selected = false;
            this.tab1selected = false;
            this.tab2selected = true;
            this.tab3selected = false;
            this.tab4selected = false;
            break;
            case 3:
            this.tab0selected = false;
            this.tab1selected = false;
            this.tab2selected = false;
            this.tab3selected = true;
            this.tab4selected = false;
            break;
            case 4:
            this.tab0selected = false;
            this.tab1selected = false;
            this.tab2selected = false;
            this.tab3selected = false;
            this.tab4selected = true;
            break;
        }
    }
}
    ```
6. css 样式可根据需要自行修改

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技