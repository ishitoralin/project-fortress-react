# This is the final project frontend for mfee36 group4.  

### The backend for final project - https://github.com/LQTjim/g4-final-project-backend
  
---
  
## 使用自己的客製 Layout

### 在你的 page 檔案中添加 getLayout 屬性 :

```
// 在這裡加入你的客製 Layout
YourPage.getLayout = (page) => (
    <YourLayout>
        {page}
    </YourLayout>
)

// 你的頁面元件
export default function YourPage() { 
    return (<>
        ...
    </>)
}
```

<br />

## 使用通用客製元件 CUI (custom ui) component

### 引入 CUI component :

```
import CUIComponent from '@/components/customUI/cui-component';
```

### 使用引入的 CUI component :

```
export default function myComponent() {
    return (<>
        ...
        <CUIComponent1 />
        ...
        <CUIComponent2 />
        ...
    </>);
}
```

<br />

## 搜尋列 (CUISearch)

### 使用 CUISearch :

```
import CUISearch from '@/components/customUI/cui-search';

export default function myComponent() {
    return (<>
        ...
        <CUISearch 
            label={label}
            placeholder={placeholder}
        />
        ...
    </>);
}
```

### CUISearch 參數 :

| 名稱 | 類型 | 說明 |
| --- | :---: | :---: |
| key | String \| Number |
| label | String | 搜尋列名稱
| placeholder | String | 搜尋列提示
| sx | Object | sx 樣式物件
| onClick | Function | 
| onChange | Function |

<br />

## 下拉式選單 (CUISelect)

### 使用 CUISelect :

```
import CUISelect from '@/components/customUI/cui-select';

export default function myComponent() {
    return (<>
        ...
        <CUISelect 
            label={label}
            options={[
                {key: optionsKey1, value: optionsValue1, label: optionsLabel1},
                {key: optionsKey2, value: optionsValue2, label: optionsLabel2},
                ...
            ]}
        />
        ...
    </>);
}
```

### CUISelect 參數 :

| 名稱 | 類型 | 說明 |
| --- | :---: | :---: |
| key | String \| Number |
| id | String | 
| label | String | 選單名稱
| sx | Object | sx 樣式物件
| defaultValue | String | 選單元件預設值
| helperText | String | 說明文字
| options | Array[ Object \| String ] | 選單項目

### CUISelect options :


| 名稱 | 類型 | 說明 | 
| --- | :---: | :---: | 
| key | String \| Number
| value | String \| Number | 選單元件選取值
| label | String | 項目名稱

#### 選單項目陣列內建議使用 Object 類型, 使用 String 類型則選單項目內 key, value, label 皆會使用該字串作為屬性值;

#### 使用 Object 類型屬性值套用的順序為 :

| key | value | label |
| :---: | :---: | :---: |
| key | value | label |
| 陣列索引值 | label | value |
|  | 空字串 | 空字串 |

<br />

## 範圍條 (CUISlider)

### 使用 CUISlider :

```
import CUISlider from '@/components/customUI/cui-slider';

export default function myComponent() {
    return (<>
        ...
        <CUISlider 
            label={label}
            max={max}
            min={min}
            distance={distance}
        />
        ...
    </>);
}
```

### CUISlider 參數 :

| 名稱 | 類型 | 說明 |
| --- | :---: | :---: |
| key | String \| Number |
| label | String | 範圍條名稱
| max | Number \| String | 範圍條最大值
| min | Number \| String | 範圍條最小值
| distance | Number \| String | 位移量
| onChange | Function |

<br />
