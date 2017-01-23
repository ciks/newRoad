class Card {
    public static Card_Type = [
        0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e,//红桃
        0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e,//方片
        0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c, 0x3d, 0x3e,//黑桃
        0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e,//梅花
        0x52, 0x53
    ];
    public static Card_Mask_Color = 0xf0;
    public static Card_Mask_Value = 0x0f;

    private _data: number;
    private _view: CardView;

    public constructor(date:number){
        this._data=date;
    }
    public GetType() {
        return this._data;
    }
    public GetValue() {
        return this._data & Card.Card_Mask_Value;
    }
    public GetColor() {
        return (this._data & Card.Card_Mask_Color) >> 4;
    }
    public static Compare(a: Card, b: Card): number {
        var temp = a.GetValue() - b.GetValue();
        if (temp == 0)
            return a.GetColor() - b.GetColor();
    }

}