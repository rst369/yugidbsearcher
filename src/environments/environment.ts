// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  lenght_search_min: 3,
  api_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  pics_url: "https://storage.googleapis.com/ygoprodeck.com/pics/",
  pics_small_url:"https://storage.googleapis.com/ygoprodeck.com/pics/",
  spell_type:"Spell Card",
  monster_type:"Normal Monster,Effect Monster,Ritual Monster,Ritual Effect Monster,Link Monster,Fusion Monster",
  desc_attr: "desc",
  name_attr: "fname",
  type_attr: "type",
  archetype_attr:"archetype",
  limit_results_flag:true,
  limit_results_number:15
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
