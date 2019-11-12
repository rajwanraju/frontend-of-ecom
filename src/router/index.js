import ItemDetails from '../components/view/ItemDetails'
import Test from '../components/view/Test'
import Inventory from '../components/view/Inventory'
export const routes =[{

    path: '',
    component:Inventory
},
{
path:'/item/:id',
component:ItemDetails

}

]