## React Redux介紹

### 流程
1. Action Creators
2. Store 
3. Reducers
4. React Components


### 求和Example_redux_精簡版
1. src下建立
    -redux
        -store.js
        -count_reducer.js
        
2. store.js
    1. 引入redux中的createStore函數，創建一個store
    2. creatStore調用時，要傳入為其服務的reducer
    3. 記得暴露store對象

3. count_reducer.js
    1. reducer的本質是一個函數，接收preState,action,返回加工後的狀態
    2. reducer有兩個作用，初始化狀態、加工狀態
    3. reducer被第一次調用時，是store自動觸發的，
        傳遞的preState是undefined,
        傳遞的action 是:{type:'@@REDUX/INIT_a.2.b.4}
    4. 在index.js中檢測store中狀態的改變，一旦發生改變，重新render<App/>。
       備註: redux只負責管理狀態，至於狀態的改變驅動頁面的展示，需要我們自己寫。

### 求和Example_redux_完整版
新增文件:
1. count_action.js :專用於創建action對象
2. constant.js     :放置容易寫錯的type值 

### 求和Example_redux_異步action版
1. 明確: 延遲的動作不想交給組件自身，想交給action
2. 何時需要異步action : 想要對狀態進行操作，但是具體的資料(數據)靠異步任務返回(非必要)。
3. 具體編碼:
    1. yarn add redux-thunk . 並配置在store中
    2. 創建action的函數不再返回一般對象，而是一個函數，該函數中寫異步任務。
    3. 異步任務有結果後，分發一個同步的action去真正操作數據。
4. 備註 : 異步action不是必需要寫的，完全可以自己等待異步任務的結果，再去分發同步action。


### 求和Example_react-redux_基本使用
1. 明確兩個概念:
    1. UI組件:不能使用任何redux的API，只負責頁面的呈現、交互等。
    2. 容器組件:負責和redux通信，將結果交給UI組件。
2. 如何創建一個容器組件-----靠react-redux的connector函數
- connect(mapStateToProps,mapDispatchToProps)(UI組件)
    - mapStateToProps:映射狀態，返回值是一個對象。
    - mapDispatchToProps:映射操作狀態的方法，返回值是一個對象。
3. 備註1 : 容器組件中的store是靠props傳進去的，而不是在容器組件中直接引入。
4. 備註2 : mapStateToProps，也可以是一個對象。


### 求和Example_react-redux優化
1. 容器組件與UI組件整合成一個文件
2. 無須自己給APP組件傳遞store;給<App/>包裹一個<Provider store={store}>即可。
3. 使用了react-redux後，也不用自己去監測redux中狀態的改變了，容器組件可以自行完成這件事。
4. mapDispatchToProps也可以簡單的寫成一個對象
5. 一個組件要和redux打交道需要經過哪些步驟?
    1. 定義好UI組件 ---不暴露
    2. 引入connect生成一個容器組件，並暴露，寫法如下:
        connect(
            state=>({key:vale}) // 映射操作狀態
            {key:xxxxxAction}  // 映射操作狀態的方法
        )(UI組件)
    3. 在UI組件中，通過this.props.xxxxx讀取和操作狀態
