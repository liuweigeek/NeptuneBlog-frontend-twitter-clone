import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    NzAvatarModule,
    NzButtonModule,
    NzCommentModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzListModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzToolTipModule
} from 'ng-zorro-antd';

import { FormsModule } from '@angular/forms';
import { PostModule } from '../post';
import { HomeComponent } from './component/home';
import { NavComponent } from './component/nav';
import { ContentComponent } from './component/content';
import { RecommendComponent } from './component/recommend';
import { UserModule } from '../user';
import { SearchModule } from '../search';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomeComponent,
        ContentComponent,
        NavComponent,
        RecommendComponent
    ],
    imports: [
        CommonModule,
        NzGridModule,
        NzMenuModule,
        NzIconModule,
        NzToolTipModule,
        NzPageHeaderModule,
        NzCommentModule,
        NzFormModule,
        FormsModule,
        NzInputModule,
        NzAvatarModule,
        NzButtonModule,
        NzListModule,
        PostModule,
        UserModule,
        SearchModule,
        RouterModule
    ]
})
export class HomeModule {
}
