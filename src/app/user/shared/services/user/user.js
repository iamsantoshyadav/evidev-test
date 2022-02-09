import {httpClient} from "@/app/shared/services";
import {getUsersURL} from "@/app/user/shared/config"
import DEFINES from "@/app/plugins/defines"

const fetchUsers = () =>{
    return httpClient.get(getUsersURL(DEFINES.userDefines.DEFAULT_RECORD)).then((response)=> response)
}

export {
    fetchUsers
}
