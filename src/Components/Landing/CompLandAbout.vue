<script setup lang="ts">
import CompLandSection from '@/Components/Landing/Common/CompLandSection.vue';
import CompLandCard from './Common/CompLandCard.vue';
import CompLandSectionHeading from './Common/CompLandSectionHeading.vue';

const abouts = [
	{
		desc: '29 June (2010)',
		title: 'Birthday',
		icon: '🎈'
	},
	{
		desc: 'ICS-II (Pursuing)',
		title: 'Education',
		icon: '📚'
	},
	{
		title: 'Profession',
		desc: 'Software Dev.',
		icon: '💻'
	},
	{
		title: 'Hobby',
		desc: 'Learning',
		icon: '📙'
	}
]

</script>

<template>
	<CompLandSection id="about">
		<div class="grid sm:grid-cols-2 gap-0 h-fit sm:gap-3">
			<div>
				<CompLandSectionHeading first="A little bit" second="about me." />
				<div class="leading-[1.8] text-muted mt-4 text-lg">
					<p>I’m a student and developer who has spent the past four years following one question: “How does this work?” <span aria-hidden="true">🧐</span> That curiosity led me to Python, JavaScript, TypeScript, and building for the web.</p>
                    <p class="mt-4">Right now, I’m exploring how agentic AI can help create useful software. I enjoy learning by making, untangling tricky bugs, and sharing what I discover with a team. Good work starts with listening—and gets better with a little experimentation. <span aria-hidden="true">🌱</span></p>
				</div>
			</div>
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-2 h-full sm:mt-1.5">
				<CompLandCard v-for="ab in abouts" :key="ab.title" class="relative">
					<span class="
							w-fit h-fit absolute -top-2 -left-2 hover:-rotate-8 transition-transform 
							py-1 px-2 text-sm bg-accent-strong rounded-lg text-white font-bold
						">
						{{ ab.title }}
					</span>
					<div class="h-full w-full flex flex-col gap-3 p-2">
						<span class="text-7xl w-full text-center">{{ ab.icon }}</span>
						<span class="w-full text-2xl font-bold text-center">{{ ab.desc }}</span>
					</div>
				</CompLandCard>
			</div>
		</div>
	</CompLandSection>
</template>
