import { shallowMount, createLocalVue } from '@vue/test-utils';
import SpeakersView from '@/views/SpeakersView';
import SearchForm from '@/components/SearchForm.vue';
import SpeakerList from '@/components/SpeakerList.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

let speaker = {
    name: 'My Name'
};

describe('SpeakersView', () =>{

    let store, getters;

    beforeEach(() =>{
        getters = {
            speakers: () =>[speaker, speaker]
        },
        store = new Vuex.Store({ getters })
    });

    const build = () => {
        const wrapper = shallowMount(SpeakersView, {store, localVue});

        return {
            wrapper,
            SearchForm: () => wrapper.findComponent(SearchForm),
            SpeakerList: () => wrapper.findComponent(SpeakerList)
        }
    }
    //Existe el componente según el snapshots?
    it('it renders the component', () =>{
        const wrapper = shallowMount(SpeakersView);

        expect(wrapper.html()).toMatchSnapshot();
    });

    //Está los componentes en SpeakersView?
    it('it renders the right', () =>{
       const { SearchForm, SpeakerList} = build();

        expect(SearchForm().exists()).toBe(true);
        expect(SpeakerList().exists()).toBe(true);   
    });

    it('it passes speakers to the speakerList', () =>{
        const { wrapper, SpeakerList} = build();

        expect(SpeakerList().vm.speakers).toEqual([speaker, speaker])
        expect(SpeakerList().vm.speakers).toBe(store.getters.speakers)
    })
});