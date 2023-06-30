## This is the final project frontend for mfee36 group4.  

#### The backend for final project - https://github.com/LQTjim/g4-final-project-backend
  
---
  
> ### 使用自己的客製 Layout

#### 在你的 page 檔案中添加 getLayout 屬性

```
// 在這裡加入你的客製 Layout
YourPage.getLayout = page => (
    <YourLayout>
    {page}
    </YourLayout>
)

// 你的頁面元件
export default function YourPage() { 
    return (
        <YourPageComponent />
    )
}
```

<br />

> ### 使用通用客製元件 CUI (custom ui) component

#### 引入 CUI component

```
import CUIComponent from '@/components/customUI/cui-component';
```

#### 使用引入的 CUI component

```
export default function myComponent() {
  return (
    <>
        ...
        <CUIComponent />
        ...
    </>
  );
}
```

<br />

> ### 搜尋列 (CUISearch)

#### 使用 CUISearch

```
import CUISearch from '@/components/customUI/cui-search';

export default function myComponent() {
    return (<>
        ...
        <CUISearch 
            key={key}
            label={label}
            placeholder={placeholder}
        />
        ...
    </>);
}
```

#### CUISearch 參數

| 名稱 | 類型 | 說明 |
| --- | :---: | :---: |
| key | String \| Number |
| label | String | 搜尋列名稱
| placeholder | String | 搜尋列提示
| sx | Object | sx 樣式物件
| onClick | Function | 
| onChange | Function |

<br />

> ### 下拉式選單 (CUISelect)

#### 使用 CUISelect

```
import CUISelect from '@/components/customUI/cui-select';

export default function myComponent() {
    return (<>
        ...
        <CUISelect 
            key={key}
            label={label}
            options={[key, value, label]}
        />
        ...
    </>);
}
```

#### CUISelect 參數

| 名稱 | 類型 | 說明 |
| --- | :---: | :---: |
| key | String \| Number |
| id | String | 
| label | String | 選單名稱
| sx | Object | sx 樣式物件
| defaultValue | String | 
| helperText | String | 說明文字
| options | Array[Object \| String] | 選單項目

#### CUISelect options

| 名稱 | 類型 | 說明 |
| --- | :---: | :---: |
| key | String \| Number |
| value | String \| Number | 選單元素選取值
| label | String | 項目名稱

<br />