export default {
/*data:Object/Function类型:页面的数据模型，类型是对象或者函数，如果类型是函数，返回值必须是对象。
     属性名不能以$或_开头，不要使用保留字for, if, show, tid。
     data与private和public不能重合使用。*/
/*props:Array/Object类型:props用于组件之间的通信，可以通过<tag xxxx='value'>方式传递给组件；
 props名称必须用小写，不能以$或_开头，不要使用保留字for, if, show, tid。
 目前props的数据类型不支持Function。*/
/*computed object类型 用于在读取或设置进行预先处理，计算属性的结果会被缓存。计算属性名不能以$或_开头，不要使用保留字。*/
/*props:['index','selected','icon_normal','icon_selected','title'],*//*无默认值情况，属性可以通过数组声明*/
    props: {
        index: {
            default: 0,
        },
        pSelected: {
            default: false
        },
        iconNormal: {
            default: ''
        },
        iconSelected: {
            default: ''
        },
        title: {
            default: '菜单0'
        },
    }, /*有默认值情况，属性只能通过对象声明*/

    onInit() {
        this.$watch('pSelected', 'onSelectedChange');//给pSelected设置数据变化监听，$watch 监控数据改变
    },
    onSelectedChange(newV, oldV) {
        console.info('选中状态变化：' + oldV + '->' + newV);
    }, /*检测父组件传递值变化*/


    childClicked() {
        //自定义事件
        this.$emit("onChildClick",{
            position: this.index,
        });
    }
}