import { NgModule } from '@angular/core';
import { InfoPokemonComponent } from './info-pokemon/info-pokemon';
import { UniquePokemonComponent } from './unique-pokemon/unique-pokemon';
@NgModule({
	declarations: [InfoPokemonComponent,
    UniquePokemonComponent],
	imports: [],
	exports: [InfoPokemonComponent,
    UniquePokemonComponent]
})
export class ComponentsModule {}
