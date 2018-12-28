(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{157:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),s("p",[t._v("查看源码我们发现实际上 RandomAccess 接口中什么都没有定义。所以，在我看来 RandomAccess 接口不过是一个标识罢了。标识什么？ 标识实现这个接口的类具有随机访问功能。")]),s("p",[t._v("在binarySearch（）方法中，它要判断传入的list 是否RamdomAccess的实例，如果是，调用indexedBinarySearch（）方法，如果不是，那么调用iteratorBinarySearch（）方法")]),t._m(5),s("p",[t._v("ArraysList 实现了 RandomAccess 接口， 而 LinkedList 没有实现。为什么呢？我觉得还是和底层数据结构有关！ArraysList 底层是数组，而 LinkedList 底层是链表。数组天然支持随机访问，时间复杂度为 O（1），所以称为快速随机访问。实际上链表也是支持的，不过需要遍历到特定位置才行，时间复杂度为 O（n）。所以，ArraysList 实现了 RandomAccess 接口，就表明了他具有快速随机访问功能。 RandomAccess 接口只是标识，并不是说 ArraysList 实现 RandomAccess 接口才具有快速随机访问功能的！")]),t._m(6),t._m(7),t._m(8),s("p",[t._v("双向链表也叫双链表，是链表的一种，它的每个数据结点中都有两个指针，分别指向直接后继和直接前驱。所以，从双向链表中的任意一个结点开始，都可以很方便地访问它的前驱结点和后继结点。一般我们都构造双向循环链表，如下图所示，同时下图也是LinkedList 底层使用的是双向循环链表数据结构。")]),t._m(9),t._m(10),s("p",[t._v("Vector类的所有方法都是同步的。可以由两个线程安全地访问一个Vector对象、但是一个线程访问Vector的话代码要在同步操作上耗费大量的时间。")]),s("p",[t._v("Arraylist不是同步的，所以在不需要保证线程安全时时建议使用Arraylist。")]),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),s("p",[t._v("JDK 1.8 的 hash方法 相比于 JDK 1.7 hash 方法更加简化，但是原理不变。")]),t._m(16),s("p",[t._v("对比一下 JDK1.7的 HashMap 的 hash 方法源码.")]),t._m(17),s("p",[t._v("相比于 JDK1.8 的 hash 方法 ，JDK 1.7 的 hash 方法的性能会稍差一点点，因为毕竟扰动了 4 次。")]),t._m(18),t._m(19),t._m(20),s("p",[t._v("相比于之前的版本， JDK1.8之后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为8）时，将链表转化为红黑树，以减少搜索时间。")]),t._m(21),t._m(22),t._m(23),s("ul",[s("li",[t._v("《Java 8系列之重新认识HashMap》 ："),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/21673805",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhuanlan.zhihu.com/p/21673805"),s("OutboundLink")],1)])]),t._m(24),t._m(25),t._m(26),t._m(27),s("p",[t._v("下面这个方法保证了 HashMap 总是使用2的幂作为哈希表的大小。")]),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),s("p",[t._v("线程一：读取到当前的 HashMap 情况，在准备扩容时，线程二介入")]),t._m(35),s("p",[t._v("线程二：读取 HashMap，进行扩容")]),t._m(36),s("p",[t._v("线程一：继续执行")]),t._m(37),s("p",[t._v("这个过程为，先将 A 复制到新的 hash 表中，然后接着复制 B 到链头（A 的前边：B.next=A），本来 B.next=null，到此也就结束了（跟线程二一样的过程），但是，由于线程二扩容的原因，将 B.next=A，所以，这里继续复制A，让 A.next=B，由此，环形链表出现：B.next=A; A.next=B")]),t._m(38),s("p",[t._v("如果你看过 HashSet 源码的话就应该知道：HashSet 底层就是基于 HashMap 实现的。（HashSet 的源码非常非常少，因为除了 clone() 方法、writeObject()方法、readObject()方法是 HashSet 自己不得不实现之外，其他方法都是直接调用 HashMap 中的方法。）")]),t._m(39),t._m(40),s("p",[t._v("ConcurrentHashMap 和 Hashtable 的区别主要体现在实现线程安全的方式上不同。")]),t._m(41),t._m(42),s("p",[t._v("图片来源：http://www.cnblogs.com/chengxiao/p/6842045.html")]),t._m(43),t._m(44),t._m(45),t._m(46),s("p",[t._v("首先将数据分为一段一段的存储，然后给每一段数据配一把锁，当一个线程占用锁访问其中一个段数据时，其他段的数据也能被其他线程访问。")]),t._m(47),s("p",[t._v("Segment 实现了 ReentrantLock,所以 Segment 是一种可重入锁，扮演锁的角色。HashEntry 用于存储键值对数据。")]),t._m(48),s("p",[t._v("一个 ConcurrentHashMap 里包含一个 Segment 数组。Segment 的结构和HashMap类似，是一种数组和链表结构，一个 Segment 包含一个 HashEntry  数组，每个 HashEntry 是一个链表结构的元素，每个 Segment 守护着一个HashEntry数组里的元素，当对 HashEntry 数组的数据进行修改时，必须首先获得对应的 Segment的锁。")]),t._m(49),s("p",[t._v("ConcurrentHashMap取消了Segment分段锁，采用CAS和synchronized来保证并发安全。数据结构跟HashMap1.8的结构类似，数组+链表/红黑二叉树。")]),s("p",[t._v("synchronized只锁定当前链表或红黑二叉树的首节点，这样只要hash不冲突，就不会产生并发，效率又提升N倍。")]),t._m(50),t._m(51),t._m(52),t._m(53),t._m(54),t._m(55),t._m(56),s("ul",[t._m(57),s("li",[s("strong",[t._v("LinkedHashMap:")]),t._v(" LinkedHashMap 继承自 HashMap，所以它的底层仍然是基于拉链式散列结构即由数组和链表或红黑树组成。另外，LinkedHashMap 在上面结构的基础上，增加了一条双向链表，使得上面的结构可以保持键值对的插入顺序。同时通过对链表进行相应的操作，实现了访问顺序相关逻辑。详细可以查看："),s("a",{attrs:{href:"https://www.imooc.com/article/22931",target:"_blank",rel:"noopener noreferrer"}},[t._v("《LinkedHashMap 源码详细分析（JDK1.8）》"),s("OutboundLink")],1)]),t._m(58),t._m(59)]),t._m(60),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/fjse51/article/details/55260493",target:"_blank",rel:"noopener noreferrer"}},[t._v("jdk1.8中ConcurrentHashMap的实现原理"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"https://crossoverjie.top/2018/07/23/java-senior/ConcurrentHashMap/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HashMap? ConcurrentHashMap? 相信看完这篇没人能难住你！"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"http://www.yuanrengu.com/index.php/2017-01-17.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HASHMAP、HASHTABLE、CONCURRENTHASHMAP的原理与区别"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/chengxiao/p/6842045.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ConcurrentHashMap实现原理及源码分析"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/jianghuxiaojin/article/details/52006118#commentBox",target:"_blank",rel:"noopener noreferrer"}},[t._v("java-并发-ConcurrentHashMap高并发机制-jdk1.8"),s("OutboundLink")],1)])])])},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("blockquote",[s("p",[t._v("本文是“最最最常见Java面试题总结”系列第三周的文章。\n主要内容：")]),s("ol",[s("li",[t._v("Arraylist 与 LinkedList 异同")]),s("li",[t._v("ArrayList 与 Vector 区别")]),s("li",[t._v("HashMap的底层实现")]),s("li",[t._v("HashMap 和 Hashtable 的区别")]),s("li",[t._v("HashMap 的长度为什么是2的幂次方")]),s("li",[t._v("HashMap 多线程操作导致死循环问题")]),s("li",[t._v("HashSet 和 HashMap 区别")]),s("li",[t._v("ConcurrentHashMap 和 Hashtable 的区别")]),s("li",[t._v("ConcurrentHashMap线程安全的具体实现方式/底层具体实现")]),s("li",[t._v("集合框架底层数据结构总结")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"arraylist-与-linkedlist-异同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arraylist-与-linkedlist-异同","aria-hidden":"true"}},[this._v("#")]),this._v(" Arraylist 与 LinkedList 异同")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("strong",[t._v("1. 是否保证线程安全：")]),t._v(" ArrayList 和 LinkedList 都是不同步的，也就是不保证线程安全；")]),s("li",[s("strong",[t._v("2. 底层数据结构：")]),t._v(" Arraylist 底层使用的是Object数组；LinkedList 底层使用的是双向循环链表数据结构；")]),s("li",[s("strong",[t._v("3. 插入和删除是否受元素位置的影响：")]),t._v(" ① "),s("strong",[t._v("ArrayList 采用数组存储，所以插入和删除元素的时间复杂度受元素位置的影响。")]),t._v(" 比如：执行"),s("code",[t._v("add(E e)")]),t._v("方法的时候， ArrayList 会默认在将指定的元素追加到此列表的末尾，这种情况时间复杂度就是O(1)。但是如果要在指定位置 i 插入和删除元素的话（"),s("code",[t._v("add(int index, E element)")]),t._v("）时间复杂度就为 O(n-i)。因为在进行上述操作的时候集合中第 i 和第 i 个元素之后的(n-i)个元素都要执行向后位/向前移一位的操作。 ② "),s("strong",[t._v("LinkedList 采用链表存储，所以插入，删除元素时间复杂度不受元素位置的影响，都是近似 O（1）而数组为近似 O（n）。")])]),s("li",[s("strong",[t._v("4. 是否支持快速随机访问：")]),t._v(" LinkedList 不支持高效的随机元素访问，而 ArrayList 支持。快速随机访问就是通过元素的序号快速获取元素对象(对应于"),s("code",[t._v("get(int index)")]),t._v("方法)。")]),s("li",[s("strong",[t._v("5. 内存空间占用：")]),t._v(" ArrayList的空 间浪费主要体现在在list列表的结尾会预留一定的容量空间，而LinkedList的空间花费则体现在它的每一个元素都需要消耗比ArrayList更多的空间（因为要存放直接后继和直接前驱以及数据）。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("补充内容:RandomAccess接口")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("RandomAccess")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("T"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("binarySearch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Comparable")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("super")]),t._v(" T"),s("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" list"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" T key"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list "),s("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("RandomAccess")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" list"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("size")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("BINARYSEARCH_THRESHOLD"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Collections"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("indexedBinarySearch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Collections"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("iteratorBinarySearch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("下面再总结一下 list 的遍历方式选择：")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("实现了RadmoAcces接口的list，优先选择普通for循环 ，其次foreach,")]),a("li",[this._v("未实现RadmoAcces接口的ist， 优先选择iterator遍历（foreach遍历底层也是通过iterator实现的），大size的数据，千万不要使用普通for循环")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"补充：数据结构基础之双向链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充：数据结构基础之双向链表","aria-hidden":"true"}},[this._v("#")]),this._v(" 补充：数据结构基础之双向链表")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"http://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-8-21/88766727.jpg",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"arraylist-与-vector-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arraylist-与-vector-区别","aria-hidden":"true"}},[this._v("#")]),this._v(" ArrayList 与 Vector 区别")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"hashmap的底层实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hashmap的底层实现","aria-hidden":"true"}},[this._v("#")]),this._v(" HashMap的底层实现")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"jdk1-8之前"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk1-8之前","aria-hidden":"true"}},[this._v("#")]),this._v(" JDK1.8之前")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("JDK1.8 之前 HashMap 底层是 "),s("strong",[t._v("数组和链表")]),t._v(" 结合在一起使用也就是 "),s("strong",[t._v("链表散列")]),t._v("。"),s("strong",[t._v("HashMap 通过 key 的 hashCode 经过扰动函数处理过后得到 hash  值，然后通过 "),s("code",[t._v("(n - 1) & hash")]),t._v(" 判断当前元素存放的位置（这里的 n 指的时数组的长度），如果当前位置存在元素的话，就判断该元素与要存入的元素的 hash 值以及 key 是否相同，如果相同的话，直接覆盖，不相同就通过拉链法解决冲突。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("所谓扰动函数指的就是 HashMap 的 hash 方法。使用 hash 方法也就是扰动函数是为了防止一些实现比较差的 hashCode() 方法 换句话说使用扰动函数之后可以减少碰撞。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("JDK 1.8 HashMap 的 hash 方法源码:")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("hash")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object key"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" h"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// key.hashCode()：返回散列值也就是hashcode")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// ^ ：按位异或")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// >>>:无符号右移，忽略符号位，空位都以0补齐")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" key"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("hashCode")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h "),s("span",{attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("16")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("hash")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" h"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// This function ensures that hashCodes that differ only by")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// constant multiples at each bit position have a bounded")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// number of collisions (approximately 8 at default load factor).")]),t._v("\n\n    h "),s("span",{attrs:{class:"token operator"}},[t._v("^=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h "),s("span",{attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("20")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h "),s("span",{attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("12")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" h "),s("span",{attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h "),s("span",{attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("7")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h "),s("span",{attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("所谓 "),a("strong",[this._v("“拉链法”")]),this._v(" 就是：将链表和数组相结合。也就是说创建一个链表数组，数组中每一格就是一个链表。若遇到哈希冲突，则将冲突的值加到链表中即可。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/3/20/16240dbcc303d872?w=348&h=427&f=png&s=10991",alt:"jdk1.8之前的内部结构"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"jdk1-8之后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk1-8之后","aria-hidden":"true"}},[this._v("#")]),this._v(" JDK1.8之后")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"http://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-8-22/67233764.jpg",alt:"JDK1.8之后的HashMap底层数据结构"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("TreeMap、TreeSet以及JDK1.8之后的HashMap底层都用到了红黑树。红黑树就是为了解决二叉查找树的缺陷，因为二叉查找树在某些情况下会退化成一个线性结构。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("推荐阅读：")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"hashmap-和-hashtable-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-和-hashtable-的区别","aria-hidden":"true"}},[this._v("#")]),this._v(" HashMap 和 Hashtable 的区别")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ol",[s("li",[s("strong",[t._v("线程是否安全：")]),t._v(" HashMap 是非线程安全的，HashTable 是线程安全的；HashTable 内部的方法基本都经过  "),s("code",[t._v("synchronized")]),t._v("  修饰。（如果你要保证线程安全的话就使用 ConcurrentHashMap 吧！）；")]),s("li",[s("strong",[t._v("效率：")]),t._v(" 因为线程安全的问题，HashMap 要比 HashTable 效率高一点。另外，HashTable 基本被淘汰，不要在代码中使用它；")]),s("li",[s("strong",[t._v("对Null key 和Null value的支持：")]),t._v(" HashMap 中，null 可以作为键，这样的键只有一个，可以有一个或多个键所对应的值为 null。。但是在 HashTable 中 put 进的键值只要有一个 null，直接抛出 NullPointerException。")]),s("li",[s("strong",[t._v("初始容量大小和每次扩充容量大小的不同 ：")]),t._v("   ①创建时如果不指定容量初始值，Hashtable 默认的初始大小为11，之后每次扩充，容量变为原来的2n+1。HashMap 默认的初始化大小为16。之后每次扩充，容量变为原来的2倍。②创建时如果给定了容量初始值，那么 Hashtable 会直接使用你给定的大小，而 HashMap 会将其扩充为2的幂次方大小（HashMap 中的"),s("code",[t._v("tableSizeFor()")]),t._v("方法保证，下面给出了源代码）。也就是说 HashMap 总是使用2的幂作为哈希表的大小,后面会介绍到为什么是2的幂次方。")]),s("li",[s("strong",[t._v("底层数据结构：")]),t._v(" JDK1.8 以后的 HashMap 在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为8）时，将链表转化为红黑树，以减少搜索时间。Hashtable 没有这样的机制。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("HasMap 中带有初始容量的构造函数：")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("HashMap")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" initialCapacity"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("float")]),t._v(" loadFactor"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initialCapacity "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("IllegalArgumentException")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"Illegal initial capacity: "')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("\n                                               initialCapacity"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initialCapacity "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" MAXIMUM_CAPACITY"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            initialCapacity "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" MAXIMUM_CAPACITY"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("loadFactor "),s("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" Float"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("isNaN")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("loadFactor"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("IllegalArgumentException")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"Illegal load factor: "')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("\n                                               loadFactor"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loadFactor "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" loadFactor"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("threshold "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("tableSizeFor")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initialCapacity"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("HashMap")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" initialCapacity"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initialCapacity"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DEFAULT_LOAD_FACTOR"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n     * Returns a power of two size for the given target capacity.\n     */")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("tableSizeFor")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" cap"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cap "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        n "),s("span",{attrs:{class:"token operator"}},[t._v("|=")]),t._v(" n "),s("span",{attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        n "),s("span",{attrs:{class:"token operator"}},[t._v("|=")]),t._v(" n "),s("span",{attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        n "),s("span",{attrs:{class:"token operator"}},[t._v("|=")]),t._v(" n "),s("span",{attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        n "),s("span",{attrs:{class:"token operator"}},[t._v("|=")]),t._v(" n "),s("span",{attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("8")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        n "),s("span",{attrs:{class:"token operator"}},[t._v("|=")]),t._v(" n "),s("span",{attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("16")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" MAXIMUM_CAPACITY"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" MAXIMUM_CAPACITY "),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" n "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"hashmap-的长度为什么是2的幂次方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-的长度为什么是2的幂次方","aria-hidden":"true"}},[this._v("#")]),this._v(" HashMap 的长度为什么是2的幂次方")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("为了能让 HashMap 存取高效，尽量较少碰撞，也就是要尽量把数据分配均匀。我们上面也讲到了过了，Hash 值的范围值-2147483648到2147483648，前后加起来大概40亿的映射空间，只要哈希函数映射得比较均匀松散，一般应用是很难出现碰撞的。但问题是一个40亿长度的数组，内存是放不下的。所以这个散列值是不能直接拿来用的。用之前还要先做对数组的长度取模运算，得到的余数才能用来要存放的位置也就是对应的数组下标。这个数组下标的计算方法是“ "),a("code",[this._v("(n - 1) & hash")]),this._v(" ”。（n代表数组长度）。这也就解释了 HashMap 的长度为什么是2的幂次方。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("这个算法应该如何设计呢？")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("我们首先可能会想到采用%取余的操作来实现。但是，重点来了："),a("strong",[this._v("“取余(%)操作中如果除数是2的幂次则等价于与其除数减一的与(&)操作（也就是说 hash%length==hash&(length-1)的前提是 length 是2的 n 次方；）。”")]),this._v(" 并且 "),a("strong",[this._v("采用二进制位操作 &，相对于%能够提高运算效率，这就解释了 HashMap 的长度为什么是2的幂次方。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"hashmap-多线程操作导致死循环问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-多线程操作导致死循环问题","aria-hidden":"true"}},[this._v("#")]),this._v(" HashMap 多线程操作导致死循环问题")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("在多线程下，进行 put 操作会导致 HashMap 死循环，原因在于 HashMap 的扩容 resize()方法。由于扩容是新建一个数组，复制原数据到数组。由于数组下标挂有链表，所以需要复制链表，但是多线程操作有可能导致环形链表。复制链表过程如下:"),a("br"),this._v("\n以下模拟2个线程同时扩容。假设，当前 HashMap 的空间为2（临界值为1），hashcode 分别为 0 和 1，在散列地址 0 处有元素 A 和 B，这时候要添加元素 C，C 经过 hash 运算，得到散列地址为 1，这时候由于超过了临界值，空间不够，需要调用 resize 方法进行扩容，那么在多线程条件下，会出现条件竞争，模拟过程如下：")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/e4cec65883d9fdc24effba57dcfa5241/xmlnote/41aed567e3419e1314bfbf689e3255a2/192",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/e4cec65883d9fdc24effba57dcfa5241/xmlnote/f44624419c0a49686fb12aa37527ee65/191",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/e4cec65883d9fdc24effba57dcfa5241/xmlnote/79424b2bf4a89902a9e85c64600268e4/193",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"hashset-和-hashmap-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hashset-和-hashmap-区别","aria-hidden":"true"}},[this._v("#")]),this._v(" HashSet 和 HashMap 区别")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/3/2/161e717d734f3b23?w=896&h=363&f=jpeg&s=205536",alt:"HashSet 和 HashMap 区别"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"concurrenthashmap-和-hashtable-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap-和-hashtable-的区别","aria-hidden":"true"}},[this._v("#")]),this._v(" ConcurrentHashMap 和 Hashtable 的区别")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("strong",[t._v("底层数据结构：")]),t._v(" JDK1.7的 ConcurrentHashMap 底层采用 "),s("strong",[t._v("分段的数组+链表")]),t._v(" 实现，JDK1.8 采用的数据结构跟HashMap1.8的结构一样，数组+链表/红黑二叉树。Hashtable 和 JDK1.8 之前的 HashMap 的底层数据结构类似都是采用 "),s("strong",[t._v("数组+链表")]),t._v(" 的形式，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的；")]),s("li",[s("strong",[t._v("实现线程安全的方式（重要）：")]),t._v(" ① "),s("strong",[t._v("在JDK1.7的时候，ConcurrentHashMap（分段锁）")]),t._v(" 对整个桶数组进行了分割分段(Segment)，每一把锁只锁容器其中一部分数据，多线程访问容器里不同数据段的数据，就不会存在锁竞争，提高并发访问率。（默认分配16个Segment，比Hashtable效率提高16倍。） "),s("strong",[t._v("到了 JDK1.8 的时候已经摒弃了Segment的概念，而是直接用 Node 数组+链表+红黑树的数据结构来实现，并发控制使用 synchronized 和 CAS 来操作。（JDK1.6以后 对 synchronized锁做了很多优化）")]),t._v("  整个看起来就像是优化过且线程安全的 HashMap，虽然在JDK1.8中还能看到 Segment 的数据结构，但是已经简化了属性，只是为了兼容旧版本；② "),s("strong",[t._v("Hashtable(同一把锁)")]),t._v(" :使用 synchronized 来保证线程安全，效率非常低下。当一个线程访问同步方法时，其他线程也访问同步方法，可能会进入阻塞或轮询状态，如使用 put 添加元素，另一个线程不能使用 put 添加元素，也不能使用 get，竞争会越来越激烈效率越低。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("两者的对比图：")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("HashTable:\n"),a("img",{attrs:{src:"http://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-8-22/50656681.jpg",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("JDK1.7的ConcurrentHashMap：\n"),a("img",{attrs:{src:"http://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-8-22/33120488.jpg",alt:""}}),this._v("\nJDK1.8的ConcurrentHashMap（TreeBin: 红黑二叉树节点\nNode: 链表节点）：\n"),a("img",{attrs:{src:"http://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-8-22/97739220.jpg",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"concurrenthashmap线程安全的具体实现方式-底层具体实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap线程安全的具体实现方式-底层具体实现","aria-hidden":"true"}},[this._v("#")]),this._v(" ConcurrentHashMap线程安全的具体实现方式/底层具体实现")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"jdk1-7（上面有示意图）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk1-7（上面有示意图）","aria-hidden":"true"}},[this._v("#")]),this._v(" JDK1.7（上面有示意图）")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("ConcurrentHashMap 是由 Segment 数组结构和 HahEntry 数组结构组成")]),this._v("。")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Segment")]),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("K"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("V"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ReentrantLock")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Serializable")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"jdk1-8-（上面有示意图）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk1-8-（上面有示意图）","aria-hidden":"true"}},[this._v("#")]),this._v(" JDK1.8 （上面有示意图）")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"集合框架底层数据结构总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集合框架底层数据结构总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 集合框架底层数据结构总结")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"collection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collection","aria-hidden":"true"}},[this._v("#")]),this._v(" Collection")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"_1-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-list","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. List")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("strong",[this._v("Arraylist：")]),this._v(" Object数组")]),a("li",[a("strong",[this._v("Vector：")]),this._v(" Object数组")]),a("li",[a("strong",[this._v("LinkedList：")]),this._v(" 双向循环链表")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"_2-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-set","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Set")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("strong",[this._v("HashSet（无序，唯一）:")]),this._v("  基于 HashMap 实现的，底层采用 HashMap 来保存元素")]),a("li",[a("strong",[this._v("LinkedHashSet：")]),this._v(" LinkedHashSet 继承与 HashSet，并且其内部是通过 LinkedHashMap 来实现的。有点类似于我们之前说的LinkedHashMap 其内部是基于 Hashmap 实现一样，不过还是有一点点区别的。")]),a("li",[a("strong",[this._v("TreeSet（有序，唯一）：")]),this._v(" 红黑树(自平衡的排序二叉树。)")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map","aria-hidden":"true"}},[this._v("#")]),this._v(" Map")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("strong",[this._v("HashMap：")]),this._v(" JDK1.8之前HashMap由数组+链表组成的，数组是HashMap的主体，链表则是主要为了解决哈希冲突而存在的（“拉链法”解决冲突）.JDK1.8以后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为8）时，将链表转化为红黑树，以减少搜索时间")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("strong",[this._v("HashTable:")]),this._v(" 数组+链表组成的，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("strong",[this._v("TreeMap:")]),this._v(" 红黑树（自平衡的排序二叉树）")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"推荐阅读："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读：","aria-hidden":"true"}},[this._v("#")]),this._v(" 推荐阅读：")])}],!1,null,null,null);a.default=e.exports}}]);