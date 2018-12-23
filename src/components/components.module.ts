import { NgModule } from '@angular/core';
import { ImageSelectorComponent } from './image-selector/image-selector';
import { PostItemComponent } from './post-item/post-item';
@NgModule({
	declarations: [ImageSelectorComponent,
    PostItemComponent],
	imports: [],
	exports: [ImageSelectorComponent,
    PostItemComponent]
})
export class ComponentsModule {}
