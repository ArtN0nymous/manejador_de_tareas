import React,{useState} from "react";
import ActivitiesContext, { ActivitiesContextModel, Activity, ActiviyType } from "./activities-context";
interface Props {
    children: React.ReactNode;
}
const ActivitiesContextProvider:React.FC<Props>=(props)=>{
    const [activities,setActivities]=useState<Activity[]>([
        {
            id:Math.random().toString(),
            title:'Hard work',
            description:'UIASGDYUASGDOULASGDLAS',
            hour:'9:00',
            activityType:'work',
            imageUrl:'/assets/images/work.png',
            isCompleted:false
        },
    ]);
    const addActivity=(title:string,description:string,hour:string,activityType:ActiviyType)=>{
        let imageUrl='';
        const newActiviy:Activity={
            id:Math.random().toString(),
            title,
            description,
            hour,
            activityType,
            imageUrl,
            isCompleted:false
        }
        setActivities(currActivities=>{
            return[...currActivities,newActiviy];
        })
    }
    const completeActivity=(activityId:string)=>{
        setActivities(currActivities=>{
            const updatedActivities =[...currActivities];
            const selectedActivityIndex=activities.findIndex(act=>act.id===activityId);
            const updatedActivity={...updatedActivities[selectedActivityIndex],iscompleted:true};
            updatedActivities[selectedActivityIndex]=updatedActivity;
            return updatedActivities;
        });
    }
    const activitiesContext:ActivitiesContextModel={
        activities,
        addActivity,
        completeActivity
    };
    return(
        <ActivitiesContext.Provider value={activitiesContext}>
            {props.children}
        </ActivitiesContext.Provider>
    )
};
export default ActivitiesContextProvider;