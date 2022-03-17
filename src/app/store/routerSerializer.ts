import { Params, RouterState, RouterStateSnapshot } from "@angular/router";
import { RouterStateSerializer } from "@ngrx/router-store";

export interface RouterStateUrl{
    url: string,
    queryParams: Params,
    params: Params
}

export class RouterSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        let route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        const {
            url,
            root: { queryParams },
        } = routerState;
        const { params } = route;
        return { url, params, queryParams };
    }
}
