import { Door } from '@/models/Door';
import { injectable } from 'tsyringe';
import { EntityMapper } from '@/server/lib/EntityMapper';
import { DoorDto } from '@/__mocks__/dtos/DoorDto';
import { BuildingDto } from '@/__mocks__/dtos/BuidlingDto';
import { ApartmentDto } from '@/__mocks__/dtos/ApartmentDto';

type BuildingDtosById = Record<string, BuildingDto>;
export type ApartmentDtoById = Record<string, ApartmentDto>;

@injectable()
export class DoorMapper implements EntityMapper<Door, DoorDto> {
  public toDomain(
    doorDto: DoorDto,
    buildingDtosById: BuildingDtosById,
    apartmentsDtoById: ApartmentDtoById,
  ): Door {
    const buildingName = this.getBuildingName(
      buildingDtosById,
      doorDto.building_id,
    );

    const apartmentName = this.getApartmentsName(
      apartmentsDtoById,
      doorDto.apartment_id,
    );

    return {
      id: doorDto.id,
      name: doorDto.name,
      buildingName,
      apartmentName,
      connectionType: doorDto.connection_type,
      connectionStatus: doorDto.connection_status,
      lastConnectionStatusUpdate: doorDto.last_connection_status_update,
    };
  }

  private getApartmentsName(apartmentsDto: ApartmentDtoById, id?: string) {
    if (!id) {
      return 'n/a';
    }

    const apartment = apartmentsDto[id];

    return apartment ? apartment.name : 'n/a';
  }

  private getBuildingName(buildingDtos: BuildingDtosById, id: string) {
    const building = buildingDtos[id];

    return building ? `${building.street} ${building.street_no}` : 'n/a';
  }
}
