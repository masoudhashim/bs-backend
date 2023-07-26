import { OwnerController } from "./controller/OwnerController"
import { UserController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
},{
    method: "put",
    route: "/users/:id",
    controller: UserController,
    action: "update"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},
{
    method: "get",
    route: "/owners",
    controller: OwnerController,
    action: "all"
},
{
    method: "get",
    route: "/owners/:id",
    controller: OwnerController,
    action: "one"
},
{
    method: "post",
    route: "/owners",
    controller: OwnerController,
    action: "save"
},{
    method: "put",
    route: "/owners/:id",
    controller: OwnerController,
    action: "all"
},
{
    method: "delete",
    route: "/owners/:id",
    controller: OwnerController,
    action: "remove"
}

]
