import { createSlice } from '@reduxjs/toolkit';
interface Icontainer {
  id: number;
  name: string;
  quantity: number;
  fileUrl: any;
  fileVolume: number;
  cost: number;
  optionPrint: string;
  optionMaterials: string;
  optionColor: string;
  orderReview: string;
  isActive: boolean;
  isOption: boolean;
}

interface Option {
  id: number;
  unit: string;
  optionCheck: boolean;
  totalCost: number;
  container: Icontainer[];
}

export const initialState: Option = {
  // 처음에 데이터 모으는 곳, 추가, 삭제 가능
  id: 0,
  unit: 'inch',
  optionCheck: false,
  totalCost: 0,
  container: [
    {
      id: 0,
      name: '',
      quantity: 1,
      fileUrl: '',
      fileVolume: 0,
      cost: 0,
      optionPrint: '',
      optionMaterials: '',
      optionColor: '',
      orderReview: '',
      isActive: true,
      isOption: false,
    },
  ],
};
// 트레이닝에 사용될 데이터 포멧에 맞게 다시 모으는 곳

const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setTotalCost: (state, action) => {
      state.totalCost = action.payload;
    },
    setName: (state, action) => {
      state.container.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
        }
      });
    },
    setQuantity: (state, action) => {
      state.container.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = action.payload.quantity;
        }
      });
    },
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
    setOptionCheck: (state, action) => {
      state.optionCheck = action.payload;
    },
    setFileUrl: (state, action) => {
      state.container.map((item) => {
        if (item.id === action.payload.id) {
          item.fileUrl = action.payload.fileUrl;
        }
      });
    },
    setFileVolume: (state, action) => {
      state.container.map((item) => {
        if (item.id === action.payload.id) {
          item.fileVolume = action.payload.fileVolume;
        }
      });
    },
    setCost: (state, action) => {
      state.container.map((item) => {
        if (item.id === action.payload.id) {
          item.cost = action.payload.cost;
        }
      });
    },
    setOptionPrint: (state, action) => {
      state.container.map((item) => {
        if (item.id === action.payload.id) {
          item.optionPrint = action.payload.optionPrint;
        }
      });
    },
    setOptionMaterials: (state, action) => {
      state.container.map((item) => {
        if (item.id === action.payload.id) {
          item.optionMaterials = action.payload.optionMaterials;
        }
      });
    },
    setOptionColor: (state, action) => {
      state.container.map((item) => {
        if (item.id === action.payload.id) {
          item.optionColor = action.payload.optionColor;
        }
      });
    },
    setOrderReview: (state, action) => {
      state.container.map((item) => {
        if (item.id === action.payload.id) {
          item.orderReview = action.payload.orderReview;
        }
      });
    },
    setIsActive: (state, action) => {
      state.container.map((item) => {
        console.log(item.id);
        if (action.payload.id === item.id) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      });
    },
    setIsOption: (state, action) => {
      state.container.map((item) => {
        console.log(item.id);
        if (action.payload.id === item.id) {
          item.isOption = true;
        }
      });
    },
    containerAdd: (state, action) => {
      console.log(action.payload);
      if (action.payload !== 0) {
        state.container.push({
          id: action.payload,
          name: '',
          quantity: 1,
          fileVolume: 0,
          cost: 0,
          fileUrl: '',
          optionPrint: '',
          optionMaterials: '',
          optionColor: '',
          orderReview: '',
          isActive: false,
          isOption: false,
        });
      }
    },
  },
});

// Actions
export const {
  setId,
  setTotalCost,
  setName,
  setQuantity,
  setUnit,
  setOptionCheck,
  setFileUrl,
  setFileVolume,
  setCost,
  setOptionPrint,
  setOptionMaterials,
  setOptionColor,
  setOrderReview,
  setIsActive,
  setIsOption,
  containerAdd,
} = optionSlice.actions;

// Reducer
export default optionSlice;
