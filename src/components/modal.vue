<template>
	<div class="modal" tabindex="-1" role="dialog" :id="id">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">{{ title }}</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<!-- <div class="modal-body" v-html="content"></div> -->
				<div class="modal-body">
					<slot></slot>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-success">Guardar</button>
					<button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
				</div>
			</div>
		</div>
	</div>
</template>


<script lang="ts">
	export default {
		props: [ "id", "title" ],
		data: function() {
			return {
			}
		},
		methods: {}
	};
</script>


<style scoped>

</style>
